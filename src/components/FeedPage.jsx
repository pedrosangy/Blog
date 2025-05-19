// src/pages/FeedPage.jsx
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import HeroSection from "../components/HeroSection";
import ArticlesGrid from "../components/Article/ArticlesGrid";
import heroBg from "../assets/herobg.jpg";
import { db } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

export default function FeedPage() {
  const { currentUser } = useAuth();
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("All");
  const [categories, setCategories] = useState(["All"]);

  // 1) carrega artigos do Firestore
  useEffect(() => {
    if (!currentUser) return;

    const fetchArticles = async () => {
      const q = query(
        collection(db, "articles"),
        where("uid", "==", currentUser.uid)
      );
      const snap = await getDocs(q);
      const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setArticles(docs);
    };

    fetchArticles();
  }, [currentUser]);

  // 2) extrai categorias únicas sempre que 'articles' mudar
  useEffect(() => {
    const cats = Array.from(
      new Set(articles.map((a) => a.theme).filter((t) => !!t))
    );
    setCategories(["All", ...cats]);
  }, [articles]);

  // 3) callback de exclusão
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "articles", id));
    setArticles((prev) => prev.filter((art) => art.id !== id));
  };

  return (
    <>
      <HeroSection bgImage={heroBg} />

      <Container sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Seus artigos
        </Typography>

        {/* Dropdown de categorias */}
        <Box sx={{ mb: 3, width: 200 }}>
          <FormControl fullWidth size="small">
            <InputLabel>Categoria</InputLabel>
            <Select
              value={filter}
              label="Categoria"
              onChange={(e) => setFilter(e.target.value)}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Passa o filtro e a lista de artigos para a grid */}
        <ArticlesGrid
          articles={articles}
          onDelete={handleDelete}
          filter={filter}
        />
      </Container>
    </>
  );
}

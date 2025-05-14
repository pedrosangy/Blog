import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import HeroSection from "../components/HeroSection";
import ArticlesGrid from "../components/Article/ArticlesGrid";
import heroBg from "../assets/herobg.jpg";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

export default function FeedPage() {
  const { currentUser } = useAuth();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    const fetchArticles = async () => {
      try {
        const q = query(
          collection(db, "articles"),
          where("uid", "==", currentUser.uid)
        );
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(docs);
      } catch (err) {
        console.error("Erro ao carregar artigos:", err);
      }
    };

    fetchArticles();
  }, [currentUser]);

  return (
    <>
      <HeroSection bgImage={heroBg} />
      <Container sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Seus artigos
        </Typography>
        <ArticlesGrid articles={articles} />
      </Container>
    </>
  );
}

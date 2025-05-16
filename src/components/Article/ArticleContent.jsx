// src/components/Article/ArticleContent.jsx
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import {
  Container,
  Paper,
  Typography,
  Divider,
  Stack,
  Box,
} from "@mui/material";

export default function ArticleContent() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const ref = doc(db, "articles", id);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setArticle({ id: snap.id, ...snap.data() });
        }
      } catch (err) {
        console.error("Erro ao carregar artigo:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography>Carregando artigo...</Typography>
      </Container>
    );
  }

  if (!article) {
    return <Navigate to="/feed" replace />;
  }

  const { title, content, theme, author, coverPreview: image } = article;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "secondary.main",
        p: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          maxWidth: 900,
          p: 3,
          boxShadow: 3,
          borderRadius: 4,
          bgcolor: "#F3F3E0",
        }}
      >
        <Box
          alt={title}
          sx={{
            width: "100%",
            maxHeight: 400,
            objectFit: "cover",
            borderRadius: 1,
            mb: 3,
          }}
        />

        {theme && (
          <Typography variant="overline" color="text.secondary">
            {theme}
          </Typography>
        )}

        <Typography variant="h4" gutterBottom sx={{ mt: theme ? 1 : 0 }}>
          {title}
        </Typography>

        {author && (
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            por {author}
          </Typography>
        )}

        <Divider sx={{ my: 3 }} />

        <Stack spacing={2}>
          {content.split("\n\n").map((para, idx) => (
            <Typography
              key={idx}
              variant="body1"
              paragraph
              sx={{
                // quebra palavras longas, URLs etc.
                wordBreak: "break-word",
                // fallback para navegadores antigos
                overflowWrap: "break-word",
                // preserva quebras de parágrafo mas permite wrap
                whiteSpace: "pre-line",
              }}
            >
              {para}
            </Typography>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}

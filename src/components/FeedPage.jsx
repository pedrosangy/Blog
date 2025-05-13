// src/pages/FeedPage.jsx
import React, { useContext } from "react";
import { Container, Typography } from "@mui/material";
import HeroSection from "../components/HeroSection";
import ArticlesGrid from "../components/Article/ArticlesGrid";
import heroBg from "../assets/herobg.jpg";
import { ArticlesContext } from "./Article/ArticlesContext";

export default function FeedPage() {
  const { articles } = useContext(ArticlesContext);

  return (
    <>
      <HeroSection bgImage={heroBg} />

      <Container sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Aqui você encontra nossos artigos mais recentes
        </Typography>
        <ArticlesGrid articles={articles} />
      </Container>
    </>
  );
}

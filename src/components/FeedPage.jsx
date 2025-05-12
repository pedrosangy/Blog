// src/pages/FeedPage.jsx
import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import HeroSection from "../components/HeroSection";
import ArticlesGrid from "../components/ArticlesGrid";
import heroBg from "../assets/herobg.jpg";
import testImg from "../assets/loginbg.jpg";

export default function FeedPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // futuramente: carregar do Firestore
    // por enquanto simula uns dados:
    setArticles([
      {
        id: "1",
        image: testImg,
        theme: "Destination",
        title: "Unveiling the Secrets Beyond the Tourist Trails",
        summary:
          "Dive into the local culture, discover hidden spots, and experience the authentic charm that often...",
        author: "Seraphina Isabella",
        date: "30 Jan 2024",
        readTime: "10 mins read",
      },
      {
        id: "2",
        image: testImg,
        theme: "Destination",
        title: "Unveiling the Secrets Beyond the Tourist Trails",
        summary:
          "Dive into the local culture, discover hidden spots, and experience the authentic charm that often...",
        author: "Seraphina Isabella",
        date: "30 Jan 2024",
        readTime: "10 mins read",
      },
      {
        id: "3",
        image: testImg,
        theme: "Destination",
        title: "Unveiling the Secrets Beyond the Tourist Trails",
        summary:
          "Dive into the local culture, discover hidden spots, and experience the authentic charm that often...",
        author: "Seraphina Isabella",
        date: "30 Jan 2024",
        readTime: "10 mins read",
      },

       
    ]);
  }, []);

  return (
    <>
      <HeroSection bgImage={heroBg} />

      <Container sx={{ mt: 6, mb: 4 }}>
        {/* texto de apresentação */}
        <Typography variant="h4" gutterBottom>
          Aqui você encontra nossos artigos mais recentes
        </Typography>

        {/* grid de cards */}
        <ArticlesGrid articles={articles} />
      </Container>
    </>
  );
}

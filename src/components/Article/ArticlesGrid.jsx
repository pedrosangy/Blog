// src/components/Article/ArticlesGrid.jsx
import React from "react";
import { Grid } from "@mui/material";
import ArticleCard from "./ArticleCard";

export default function ArticlesGrid({ articles, onDelete, filter }) {
  const filtered =
    filter === "All"
      ? articles
      : articles.filter((a) => a.theme === filter);

  return (
    <Grid container spacing={4}>
      {filtered.map((art) => (
        <Grid item key={art.id} xs={12} sm={6} md={4}>
          <ArticleCard
            id={art.id}
            image={art.coverPreview || art.imageUrl}
            theme={art.theme}
            title={art.title}
            author={art.author}
            onDelete={onDelete}
          />
        </Grid>
      ))}
    </Grid>
  );
}

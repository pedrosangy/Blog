// src/components/ArticlesGrid.jsx
import React from "react";
import { Grid } from "@mui/material";
import ArticleCard from "./ArticleCard";

export default function ArticlesGrid({ articles }) {
  return (
    <Grid container spacing={4}>
      {articles.map((art) => (
        <Grid item key={art.id} xs={12} sm={6} md={4}>
          <ArticleCard {...art} />
        </Grid>
      ))}
    </Grid>
  );
}

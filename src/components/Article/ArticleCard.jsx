// src/components/ArticleCard.jsx
import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ArticleCard({ id, image, theme, title, author }) {
  return (
    <Box sx={{ width: 346, m: 1 }}>
      <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
        <CardActionArea
          component={Link}
          to={`/article-content/${id}`}
          sx={{ display: "block" }}
        >
          <CardMedia
            component="img"
            height="230"
            image={image}
            alt={title}
            sx={{ objectFit: "cover" }}
          />
        </CardActionArea>
      </Card>

      {theme && (
        <Chip
          label={theme}
          variant="outlined"
          size="small"
          sx={{ mb: 1, mt: 1 }}
        />
      )}

      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {author}
      </Typography>
    </Box>
  );
}

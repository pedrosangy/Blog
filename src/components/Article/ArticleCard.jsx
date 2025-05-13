import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  Paper,
} from "@mui/material";

export default function ArticleCard({ image, theme, title, author }) {
  return (
    <Box sx={{ width: 346, m: 1 }}>
      <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="230"
          image={image}
          alt={title}
          sx={{ objectFit: "cover" }}
        />
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

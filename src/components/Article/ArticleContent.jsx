// src/components/HeroSection.jsx
import React from "react";
import { Container, Paper, Typography, Divider, Stack } from "@mui/material";
import MuiMarkdown from "mui-markdown";

export default function ArticleContent({ content, title }) {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={1} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Stack spacing={2}>
          {/* Caso plain text */}
          {typeof content === "string" && !content.match(/[#>*_-]/) ? (
            content.split("\n\n").map((para, i) => (
              <Typography key={i} variant="body1" paragraph>
                {para}
              </Typography>
            ))
          ) : (
            /* Caso Markdown */
            <MuiMarkdown>{content}</MuiMarkdown>
          )}
        </Stack>
      </Paper>
    </Container>
  );
}

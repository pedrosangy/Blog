// src/pages/NewArticlePage.jsx
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NewArticlePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [theme, setTheme] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrar com Firestore
    console.log({ title, summary, imageUrl, theme });
    navigate("/feed");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "secondary.main",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 900,
          minHeight: 550,
          display: "flex",
          boxShadow: 3,
          borderRadius: 4,
        }}
      ></Card>
    </Box>
  );
}

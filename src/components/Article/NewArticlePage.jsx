// src/components/Article/NewArticlePage.jsx
import React, { useState } from "react";
import { Box, Card, TextField, Button, Typography } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function NewArticlePage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [theme, setTheme] = useState("");
  const [author, setAuthor] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert("Você precisa estar logado para publicar.");
      return;
    }

    try {
      await addDoc(collection(db, "articles"), {
        uid: currentUser.uid,
        title,
        content,
        theme,
        author,
        coverPreview: preview,
        createdAt: serverTimestamp(),
      });
      navigate("/feed");
    } catch (error) {
      console.error("Erro ao publicar artigo:", error);
      alert("Falha ao publicar. Tente novamente.");
    }
  };

  const lineBg = `
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 24px,
      rgba(0,0,0,0.1) 24px,
      rgba(0,0,0,0.1) 25px
    )
  `;

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
      <Card
        sx={{
          width: "100%",
          maxWidth: 900,
          p: 3,
          boxShadow: 3,
          borderRadius: 4,
          bgcolor: "#F3F3E0",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "primary.main",
            mb: 3,
          }}
        >
          Novo Artigo
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {/* Título */}
          <TextField
            label="Título do Artigo"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
          />

          {/* Conteúdo */}
          <Box
            component="div"
            contentEditable
            onInput={(e) => setContent(e.currentTarget.textContent)}
            suppressContentEditableWarning
            data-placeholder="Escreva aqui o conteúdo do artigo..."
            sx={{
              minHeight: 200,
              
              p: 1,
              background: lineBg,
              backgroundColor: "#fff",
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: 1,
              fontFamily: "Roboto, sans-serif",
              lineHeight: "24px",
              overflowY: "auto",
              "&:focus": { outline: "none" },
              /* placeholder via CSS */
              "&[data-placeholder]:empty:before": {
                content: "attr(data-placeholder)",
                color: "rgba(0,0,0,0.4)",
                pointerEvents: "none",
                display: "block",
              },
            }}
          />

          {/* Categorias */}
          <TextField
            label="Categorias (separe por vírgula)"
            variant="outlined"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            fullWidth
          />

          {/* Upload de Imagem (preview apenas) */}
          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle1" gutterBottom>
              Capa do Artigo
            </Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<PhotoCameraIcon />}
              sx={{
                textTransform: "none",
                borderColor: "primary.main",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "rgba(31,37,68,0.04)",
                  borderColor: "primary.main",
                },
              }}
            >
              Selecionar Imagem
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleFileChange}
              />
            </Button>
            {preview && (
              <Box
                component="img"
                src={preview}
                alt="Preview da capa"
                sx={{
                  mt: 2,
                  width: "100%",
                  maxHeight: 200,
                  borderRadius: 1,
                  objectFit: "cover",
                  boxShadow: 1,
                }}
              />
            )}
          </Box>

          {/* Autor */}
          <TextField
            label="Autor"
            variant="outlined"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
          />

          {/* Botão Publicar */}
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 2, textTransform: "none" }}
          >
            Publicar Artigo
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

// src/pages/LoginPage.jsx
import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Card,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import bgLogin from "../assets/loginbg.jpg";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/feed");
    } catch (err) {
      setError("Falha ao entrar: " + err.message);
      setLoading(false);
    }
  };

  const textFieldSX = {
    backgroundColor: "#81689D",
    borderRadius: 1,
    mb: 2,
    "& .MuiInputLabel-root": {
      color: "#ccc", // cor padrão do label
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff", // cor do label em focus
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
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
      >
        {/* Lado esquerdo: imagem de fundo */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            bgcolor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: 4,
              backgroundImage: `url(${bgLogin})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        {/* Lado direito: formulário */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.main",
            color: "white",
          }}
        >
          <Avatar sx={{ mb: 2, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ mb: 1 }}>
            Login
          </Typography>

          {/* Linha divisória */}
          <Divider
            sx={{ width: "80%", mb: 3, bgcolor: "rgba(255,255,255,0.5)" }}
          />

          {error && (
            <Typography color="error" sx={{ mb: 2, textAlign: "center" }}>
              {error}
            </Typography>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={textFieldSX}
              InputProps={{
                style: { color: "#fff" },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ ...textFieldSX, mb: 3 }}
              InputProps={{
                style: { color: "#fff" },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 1,
                backgroundColor: "#81689D",
                color: "#fff",
                "&:hover": { backgroundColor: "#6f5490" },
              }}
            >
              {loading ? "Entrando…" : "Entrar"}
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

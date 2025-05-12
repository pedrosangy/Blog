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

  const fieldBg = "#81689D"; // mesma cor dos botões

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

          <Divider
            sx={{ width: "80%", mb: 3, bgcolor: "rgba(255,255,255,0.5)" }}
          />

          {error && (
            <Typography color="error" sx={{ mb: 2, textAlign: "center" }}>
              {error}
            </Typography>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            {/* TextField Email */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: fieldBg,
                  borderRadius: 2,
                  "& fieldset": {
                    borderColor: fieldBg,
                  },
                  "&:hover fieldset": {
                    borderColor: fieldBg,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: fieldBg,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fff",
                },
                input: {
                  color: "#fff",
                },
              }}
            />

            {/* TextField Senha */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: fieldBg,
                  borderRadius: 2,
                  "& fieldset": {
                    borderColor: fieldBg,
                  },
                  "&:hover fieldset": {
                    borderColor: fieldBg,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: fieldBg,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fff",
                },
                input: {
                  color: "#fff",
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 3,
                backgroundColor: fieldBg,
                color: "#fff",
                "&:hover": { backgroundColor: "#6f5490" },
                textTransform: "none",
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

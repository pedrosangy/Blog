// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1F2544" }, // tom escuro
    secondary: { main: "#474F7A" }, // tom médio
    info: { main: "#81689D" }, // tom intermediário
    warning: { main: "#FFD0EC" }, // rosa de destaque
    background: {
      default: "#F5F5F5", // fundo geral neutro
      paper: "#FFFFFF",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

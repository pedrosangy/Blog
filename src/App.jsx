// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import FeedPage from "./components/FeedPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      {/* ao acessar “/” já manda pro feed (se estiver logado) */}
      <Route path="/" element={<Navigate to="/feed" replace />} />

      {/* tela de login */}
      <Route path="/login" element={<LoginPage />} />

      {/* feed protegido */}
      <Route
        path="/feed"
        element={
          <PrivateRoute>
            <FeedPage />
          </PrivateRoute>
        }
      />

      {/* qualquer outra URL reenviar para login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;

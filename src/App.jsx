// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import FeedPage from "./components/FeedPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {   
  return (
    <Routes >
      <Route path="/" element={<Navigate to="/feed" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/feed"
        element={
          <PrivateRoute>
            <FeedPage />
          </PrivateRoute>
        }
      />
      {/* rota curinga */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;

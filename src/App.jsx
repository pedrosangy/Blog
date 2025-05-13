// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticlesProvider } from "./components/Article/ArticlesContext";
import LoginPage from "./components/LoginPage";
import NewArticlePage from "./components/Article/NewArticlePage";
import FeedPage from "./components/FeedPage";

function App() {
  return (
    <ArticlesProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new-article" element={<NewArticlePage />} />
        <Route path="/feed" element={<FeedPage />} />
        {/* … outras rotas */}
      </Routes>
    </ArticlesProvider>
  );
}

export default App;

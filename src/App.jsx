import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ArticlesProvider } from "./components/Article/ArticlesContext";
import LoginPage from "./components/LoginPage";
import NewArticlePage from "./components/Article/NewArticlePage";
import FeedPage from "./components/FeedPage";
import ArticleContent from "./components/Article/ArticleContent";

function App() {
  return (
    <ArticlesProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new-article" element={<NewArticlePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/article-content/:id" element={<ArticleContent />} />
        {/* … outras rotas */}
      </Routes>
    </ArticlesProvider>
  );
}

export default App;

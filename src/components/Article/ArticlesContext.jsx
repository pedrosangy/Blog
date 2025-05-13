// src/contexts/ArticlesContext.jsx
import React, { createContext, useState } from "react";

export const ArticlesContext = createContext();

export function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  const addArticle = (article) => {
    setArticles((prev) => [...prev, article]);
  };

  return (
    <ArticlesContext.Provider value={{ articles, addArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
}
    
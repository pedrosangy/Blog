// src/pages/FeedPage.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
// importe a imagem do src/assets
import heroBg from "../assets/herobg.jpg";

export default function FeedPage() {
  return (
    <>
      {/* passe a variável heroBg, não a string */}
      <HeroSection bgImage={heroBg} />
      {/* aqui virá o restante do feed… */}
    </>
  );
}

// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// opcional: só se quiser Analytics
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmwAk_nojvVMsarmHSL_GZuUevAQHZHlI",
  authDomain: "jesusblog-59f16.firebaseapp.com",
  projectId: "jesusblog-59f16",
  storageBucket: "jesusblog-59f16.appspot.com",
  messagingSenderId: "150677043597",
  appId: "1:150677043597:web:5f6742faaa92a2723f65c4",
  measurementId: "G-4LTRGP5VJE", // opcional
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Módulos que vamos usar
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);  // só se for usar analytics

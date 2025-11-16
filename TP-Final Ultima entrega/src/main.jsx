import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import Componentes from "./pages/Componentes.jsx";
import Creadores from "./pages/Creadores.jsx";
import Historia from "./pages/Historia.jsx";
import Perifericos from "./pages/Perifericos.jsx";
import Placa from "./pages/Placa.jsx";
import Juegos from "./pages/Juegos.jsx";
import "./style/Base.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Componentes" element={<Componentes />} />
        <Route path="/Creadores" element={<Creadores />} />
        <Route path="/Historia" element={<Historia />} />
        <Route path="/Perifericos" element={<Perifericos />} />
        <Route path="/Placa" element={<Placa />} />
        <Route path="/Juegos" element={<Juegos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

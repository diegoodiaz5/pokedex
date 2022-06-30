import React from "react";
import Header from "../Header/Header.jsx";
import Buscador from "../Buscador/Buscador";
import Section from "../Section/Section.jsx";
import "./Principal.css";

export default function Principal({
  ordenar,
  ordenandoPorNombre,
  handleChange,
  lista,
}) {
  return (
    <div className="principal">
      <div className="conteinerPrincipal">
        <Header
          ordenarPorNombre={ordenar}
          ordenandoPorNombre={ordenandoPorNombre}
        />
        <Buscador filtrado={handleChange} />
        <Section pokemons={lista} />
      </div>
    </div>
  );
}

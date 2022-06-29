import "./Buscador.css";
import Lupa from "../Materiales/lupa.png";
import { useState } from "react";

export default function Buscador() {
  const [valor, setValor] = useState();
  console.log(document.getElementsByClassName("input"));

  return (
    <div className="buscador">
      <div className="inputContenedor">
        <input
          type="search"
          id="input"
          placeholder="Buscar"
          value={valor}
          onChange={(ev) => setValor(ev.target.value)}
        />

        <img
          src={Lupa}
          className="input-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
          alt="lupa"
        />
      </div>
    </div>
  );
}

// const infoImput = B;
// let emparejamiento = [...listaDePokemones].nombre.match(infoImput);

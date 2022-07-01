import "./Header.css";
import Pokeball from "../Materiales/Pokeball.png";
import Arrow from "../Materiales/Arrow.svg";

export default function Header({ ordenarPorNombre, ordenandoPorNombre }) {
  return (
    <header>
      <div className="titulo">
        <img
          className="pokeballTitulo"
          src={Pokeball}
          width="48px"
          height="48px"
          alt="Pokeball"
        />
        <h1>Pokédex</h1>
      </div>
      <div className="filtro" onClick={ordenarPorNombre}>
        <p id="orden">{!ordenandoPorNombre ? "#" : "A Z"}</p>
        <img src={Arrow} width="32px" height="32px" alt="Flecha" />
      </div>
    </header>
  );
}

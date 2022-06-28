import "./Header.css";
import Pokeball from "../Materiales/Pokeball.png";
import Arrow from "../Materiales/Arrow.svg";

export default function Header() {
  return (
    <header>
      <div className="titulo">
        <img src={Pokeball} width="48px" height="48px" alt="Pokeball" />
        <h1>Pokédex</h1>
      </div>
      <div className="filtro">
        <p>#</p>
        <img src={Arrow} width="32px" height="32px" alt="Flecha" />
      </div>
    </header>
  );
}

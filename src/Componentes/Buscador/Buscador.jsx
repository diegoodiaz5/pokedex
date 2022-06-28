import "./Buscador.css";
import Lupa from "../Materiales/lupa.png";

export default function Buscador() {
  return (
    <div className="buscador">
      <div className="inputContenedor">
        <input
          type="search"
          className="input"
          placeholder="Buscar"
          onChange={() => {}}
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

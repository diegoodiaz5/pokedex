import "./Buscador.css";
import Search from "../Materiales/search.svg";

export default function Buscador({ filtrado }) {
  return (
    <div className="buscador">
      <div className="inputContenedor">
        <input
          type="search"
          id="input"
          placeholder="Buscar"
          onChange={filtrado}
          style={{ fontFamily: "Poppins", fontSize: "20px" }}
        />
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import "./TarjetaPokemon.css";

export default function TarjetaPokemon({ pokemon }) {
  return (
    <Link to={`detalles/${pokemon.nombre}`} className="plantillaPokemon">
      <div
        className={pokemon.claseCSS}
        style={{
          border: `solid ${pokemon.colorPrimario}`,
          borderWidth: "4px 4px 10px 4px",
        }}
      >
        <p className="numPoke" style={{ color: pokemon.colorPrimario }}>
          #{pokemon.numero}
        </p>
        <div className="imgTarjeta">
          <img src={pokemon.imagen} alt="" />
        </div>
        <div className="h3" style={{ backgroundColor: pokemon.colorPrimario }}>
          <h3>{pokemon.nombre}</h3>
        </div>
      </div>
    </Link>
  );
}

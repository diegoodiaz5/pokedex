import "./Detalles.css";
import { useParams } from "react-router-dom";
import ArrowLeft from "../Materiales/arrow-left.svg";
import Pokeball from "../Materiales/Pokeball.png";
import Weight from "../Materiales/Weight.svg";
import Height from "../Materiales/Height.svg";
import { Link } from "react-router-dom";
import ArrowBefore from "../Materiales/arrow-before.svg";
import ArrowNext from "../Materiales/arrow-next.svg";

export default function Detalles({ lista }) {
  const { nombre } = useParams();
  const indicePokemon = lista.findIndex((pkmn) => pkmn.nombre === nombre);
  const pokemon = lista[indicePokemon];

  return (
    <>
      <div className="contenedor">
        <div
          className="tarjetaPokDetalle"
          style={{ backgroundColor: pokemon.colorPrimario }}
        >
          {indicePokemon !== 0 && (
            <Link to={`/detalles/${lista[indicePokemon - 1].nombre}`}>
              <div className="vector1">
                <img src={ArrowBefore} alt="" />
              </div>
            </Link>
          )}

          {indicePokemon !== lista.length - 1 && (
            <Link to={`/detalles/${lista[indicePokemon + 1].nombre}`}>
              <div className="vector2">
                <img src={ArrowNext} alt="" />
              </div>
            </Link>
          )}

          <div className="nombrePokemon">
            <Link to={"/"}>
              <div className="imgFlecha">
                <img src={ArrowLeft} alt="flecha-atras" />
              </div>
            </Link>

            <div className="pokeName">
              <h1 className="nombre">{pokemon.nombre}</h1>
              <h2 className="h2">#{pokemon.numero}</h2>
            </div>
          </div>
          <div className="imageFondo">
            <img src={Pokeball} alt="pokeball" />
          </div>
          <div className="imagenPoke">
            <img className="imgPoke" src={pokemon.imagen} alt="foto pokemon" />
          </div>

          <div className="card">
            <div className="cardType">
              <div
                className="cuadro1"
                style={{ background: pokemon.colorPrimario }}
              >
                {pokemon.tipo1}
              </div>
              {pokemon.colorSecundario !== "" ? (
                <div
                  className="cuadro2"
                  style={{ background: pokemon.colorSecundario }}
                >
                  {pokemon.tipo2}
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div className="cardTitle" style={{ color: pokemon.colorPrimario }}>
              <h3>About</h3>
            </div>

            <div className="cardBout">
              <div className="cardWeight">
                <div className="cardImgkg">
                  <img src={Weight} alt="balanza" />
                  <p>{pokemon.peso} kg</p>
                </div>
                <div className="cardWeightTitle">
                  <p>Wheight</p>
                </div>
              </div>

              <div className="cardHeight">
                <div className="cardImgM">
                  <img src={Height} alt="regla" />
                  <p>{pokemon.altura} m</p>
                </div>
                <div className="cardHeightTitle">
                  <p>Height</p>
                </div>
              </div>

              <div className="cardMoves">
                <div className="cardText1">
                  <p>
                    {pokemon.movimiento1} <br />
                    {pokemon.movimiento2}
                  </p>
                </div>
                <div className="cardTextMoves">
                  <p>Moves</p>
                </div>
              </div>
            </div>
            <div className="cardText2">
              <p>{pokemon.descripcion}</p>
            </div>
            <div className="cardTitleGraph">
              <p
                className="pCardTitle"
                style={{ color: pokemon.colorPrimario }}
              >
                Base Stats
              </p>
            </div>

            <div className="contenedorGraph">
              <div
                className="atributtes"
                style={{ color: pokemon.colorPrimario }}
              >
                <p>HP</p>
                <p>ATK</p>
                <p>DEF</p>
                <p>SATK</p>
                <p>SDEF</p>
                <p>SPD</p>
              </div>
              <div className="values">
                <p>{pokemon.HP}</p>
                <p>{pokemon.ATK}</p>
                <p>{pokemon.DEF}</p>
                <p>{pokemon.SATK}</p>
                <p>{pokemon.SDEF}</p>
                <p>{pokemon.SPD}</p>
              </div>
              <div className="graph">
                <div className="graphlinea">
                  <div
                    className="barra1"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.HP / 2}%`,
                    }}
                  ></div>
                </div>
                <div className="graphlinea">
                  <div
                    className="barra2"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.ATK / 2}%`,
                    }}
                  ></div>
                </div>
                <div className="graphlinea">
                  <div
                    className="barra3"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.DEF / 2}%`,
                    }}
                  ></div>
                </div>
                <div className="graphlinea">
                  <div
                    className="barra4"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.SATK / 2}%`,
                    }}
                  ></div>
                </div>
                <div className="graphlinea">
                  <div
                    className="barra5"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.SDEF / 2}%`,
                    }}
                  ></div>
                </div>
                <div className="graphlinea">
                  <div
                    className="barra6"
                    style={{
                      backgroundColor: pokemon.colorPrimario,
                      width: `${pokemon.SPD / 2}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

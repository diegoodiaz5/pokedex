import "./Detalles.css";

export default function Detalles() {
  return (
    <>
      <div className="tarjetaPokDetalle">
        <div className="vector1">
          <img className="imgVector1" src="./index/img/Frame.svg" alt="" />
        </div>
        <div className="vector2">
          <img className="imgVector2" src="./index/img/Frame.svg" alt="" />
        </div>
        <div className="nombrePokemon">
          <div className="imgFlecha">
            <img src="./index/img/arrow-left.svg" alt="flecha-atras" />
          </div>

          <div className="pokeName">
            <h1 className="nombre">Aron</h1>
            <h2 className="h2">#304</h2>
          </div>
        </div>
        <div className="imagenPoke">
          <img
            className="imgPoke"
            src="./index/img/bulbasaur.png"
            alt="foto pokemon"
          />
        </div>

        <div className="card">
          <div className="cardType">
            <div className="cuadro1">Grass</div>
            <div className="cuadro2">Poison</div>
          </div>

          <div className="cardTitle">
            <h3>About</h3>
          </div>

          <div className="cardBout">
            <div className="cardWeight">
              <div className="cardImgkg">
                <img src="./index/img/Weight.svg" alt="balanza" />
                <p>kg</p>
              </div>
              <div className="cardWeightTitle">
                <p>Wheight</p>
              </div>
            </div>

            <div className="cardHeight">
              <div className="cardImgM">
                <img src="./index/img/Height.svg" alt="regla" />
                <p>m</p>
              </div>
              <div className="cardHeightTitle">
                <p>Height</p>
              </div>
            </div>

            <div className="cardMoves">
              <div className="cardText1">
                <p>Chlorophyll Overgrow</p>
              </div>
              <div className="cardTextMoves">
                <p>Moves</p>
              </div>
            </div>
          </div>
          <div className="cardText2">
            <p>
              There is a plant seed on its back right from the day this Pokémon
              is born. The seed slowly grows larger.
            </p>
          </div>
          <div className="cardTitleGraph">
            <p className="pCardTitle">Base Stats</p>
          </div>

          <div className="contenedorGraph">
            <div className="atributtes">
              <p>HP</p>
              <p>ATK</p>
              <p>DEF</p>
              <p>SATK</p>
              <p>SDEF</p>
              <p>SPD</p>
            </div>
            <div className="values">
              <p>045</p>
              <p>049</p>
              <p>049</p>
              <p>065</p>
              <p>065</p>
              <p>045</p>
            </div>
            <div className="graph">
              <div className="graphlinea">
                <div className="barra1"></div>
              </div>
              <div className="graphlinea">
                <div className="barra2"></div>
              </div>
              <div className="graphlinea">
                <div className="barra3"></div>
              </div>
              <div className="graphlinea">
                <div className="barra4"></div>
              </div>
              <div className="graphlinea">
                <div className="barra5"></div>
              </div>
              <div className="graphlinea">
                <div className="barra6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

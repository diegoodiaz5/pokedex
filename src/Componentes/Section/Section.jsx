import "./Section.css";
import "../TarjetaPokemon/TarjetaPokemon";
import TarjetaPokemon from "../TarjetaPokemon/TarjetaPokemon";

export default function Section({ pokemons }) {
  return (
    <div className="tarjetas">
      {pokemons.map((pokemon) => (
        <TarjetaPokemon pokemon={pokemon} key={pokemon.numero} />
      ))}
    </div>
  );
}

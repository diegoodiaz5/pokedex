import './App.css';
import Header from './Componentes/Header/Header'
import Buscador from './Componentes/Buscador/Buscador'
import Section from './Componentes/Section/Section'
import listaDePokemons from './Componentes/DatosPokemons/listaPokemons';
import { useState } from 'react';

function App() {
  const [buscar, setBuscar] = useState;
     return (
    <div className="App">
      <Header/>
      <Buscador buscarPorLetra = {setBuscar}/>
      <Section pokemons={listaDePokemons}/>
    </div>
  );
}

export default App;

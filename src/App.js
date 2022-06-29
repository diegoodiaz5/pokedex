import './App.css'
import Header from './Componentes/Header/Header.jsx'
import Buscador from './Componentes/Buscador/Buscador'
import Section from './Componentes/Section/Section.jsx'
import listaDePokemons from './Componentes/DatosPokemons/listaPokemons'
import { useState } from 'react'

function App() {
  const [lista, setLista] = useState(listaDePokemons)
  const [ordenandoPorNombre, setOrdenandoPorNombre] = useState (false)
  const ordenar = () => {
    if (ordenandoPorNombre === false) {
      const listaOrdenada = lista.sort((a, b) => 
     a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0)
     setLista([...listaOrdenada])
     setOrdenandoPorNombre(true);
    } else {
    const listaOrdenada = lista.sort((a, b) => 
     a.numero > b.numero ? 1 : a.numero < b.numero ? -1 : 0)
     setLista([...listaOrdenada])
     setOrdenandoPorNombre(false)
    }
  }

     return (
    <div className="App">
      <Header ordenarPorNombre={ordenar}/>
      <Buscador />
      <Section pokemons={lista}/>
    </div>
  );
}

export default App;

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

  const handleChange = (e) => {
    if (e.target.value === ""){
      setLista(listaDePokemons)
    } else {
      const filtroLista = [...listaDePokemons].filter((pokemon) => {
        const buscar = new RegExp(`.*${e.target.value}.*`, "gi");
        return pokemon.nombre.match(buscar);
      });
      setLista(filtroLista);
    }
  }

     return (
    <div className="App">
       <Header ordenarPorNombre={ordenar} ordenandoPorNombre={ordenandoPorNombre}/> 
      <Buscador filtrado={handleChange}/>
      <Section pokemons={lista}/>
    </div>
  );
}

export default App;

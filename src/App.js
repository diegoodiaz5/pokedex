import listaDePokemons from './Componentes/DatosPokemons/listaPokemons'
import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Principal from "./Componentes/Principal/Principal.jsx"
import Detalles from './Componentes/Detalles/Detalles'

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

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Principal ordenar={ordenar} handleChange={handleChange} ordenandoPorNombre={ordenandoPorNombre} lista={lista}/>}/>
        <Route path="detalles/:nombre" element={<Detalles lista={listaDePokemons}/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;

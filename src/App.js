import React, { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList";
import { fetchAllPokemon, fetchPokemonByName } from "./pokemonService/pokemonService";
import "./style.css";

function App() {
  const [pikachu, setPikachu] = useState({})
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchPokemon = (e) => {
    e.preventDefault()
    if (!value) return

    setLoading(true)

    setTimeout(async () => {
      fetchPokemonByName(value)
        .then((data) => setPikachu(data))
        .catch((err) => setError(err))
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="App">
    <div className='container'>
      <form onSubmit={(e) => {
        searchPokemon(e)
      }}>
        <input className='searchInput' value={value} onChange={e => setValue(e.target.value)} placeholder="Search pokemon"/>
      </form>
      {pikachu.name && (
        <PokemonCard pikachu={pikachu}/>
      )}
      {loading && (
        <h1 className="loader">Loading...</h1>
      )}
      {error?.stack && (
        <h1 className="loader">{
          error.stack.length > 30 
          ?
            error.stack.slice(0, 30)
          :
            error.stack
        }</h1>
      )}
      <PokemonList/>
    </div>
    </div>
  );
}

export default App;

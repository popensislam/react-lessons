import { useEffect, useState } from "react";
import { fetchPokemonByName } from "../pokemonService";
import { fetchTodo } from "../todoService";

const FetchPage = () => {
  const [todos, setTodos] = useState([])
  const [params, setParams] = useState({
    _limit: 5,
    _page: 1
  })

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
      fetchPokemonByName('pikachu')
        .then((data) => setPokemon(data))
  }, [ params ])

  const handlePrevPage = () => {
    setParams(prev => {
      return {...prev, _page: prev._page - 1}
    })
  }
  const handleNextPage = () => {
    setParams(prev => {
      return {...prev, _page: prev._page + 1}
    })
  }

  const handleOnChange = (e) => {
    setParams(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  return ( 
    <div className='backgroundFetch'>
      <img src={pokemon?.sprites?.other.dream_world.front_default} alt='pokemon img'/>
      {pokemon?.stats?.map((item, i) => 
        <h1 key={i}>{item.stat.name}: {item.base_stat}</h1>
      )}
      {/* <h1 className='titleTodo'>Todos</h1>
      <input className="inputLimit" type='number' name='_limit' value={params._limit} onChange={handleOnChange}/>
      {todos.map((todo) => 
        <div className='todoItem' key={todo.id}>
          <div className="textTodo">
            <h1>{todo.id}</h1>
            <h1>{todo.title}</h1>
          </div>
          <button>{todo.completed ? 'Сделано' : "Не сделано"}</button>
        </div>
      )}
      {!todos.length && (
        <h1>Loading...</h1>
      )}
      <div className='navWrapper'>
        <button className="btnTodo" onClick={handlePrevPage}>prev</button>
        <div className="paginationTodo">{params._page}</div>
        <button className="btnTodo" onClick={handleNextPage}>next</button>
      </div> */}
    </div>
   );
}
 
export default FetchPage;
import axios from "axios"
import { useEffect, useState } from "react"
import { fetchAllPokemon, fetchPokemonById } from "../pokemonService/pokemonService"
import PokemonCard from './PokemonCard'

const PokemonList = () => {
  const [listPokemon, setListPokemon] = useState([])
  const [dataPokemon, setDataPokemon] = useState({})
  const [allPages, setAllPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [dataToSend, setDataToSend] = useState({
    next: '',
    prev: ''
  })
  const [params, setParams] = useState({
    limit: 20,
    offset: 0,
  })

  useEffect(() => {
    fetchAllPokemon(params)
      .then((data) => {
        setDataPokemon(data)
        setAllPages(Math.ceil(data.count / 20))
        setDataToSend({next: data.next, prev: data.previous})
      })
  }, [ params.offset, params.limit ])

  useEffect(() => {
    const asyncFunc = async () => {
      const result = []
      for (let i = 0; i <= dataPokemon.results?.length - 1; i++) {
        const { data } = await axios.get(dataPokemon.results[i].url)
        result.push(data)
      }
      setListPokemon(result)
    }
    asyncFunc()
  }, [ dataPokemon ])

  const handleNext = () => {
    if (dataToSend.next !== null) {
      setCurrentPage(prev => prev + 1)
      setParams({ ...params, offset: params.offset + 20 })
    }
  }
  const handlePrev = () => {
    if (dataToSend.prev !== null) {
      setCurrentPage(prev => prev - 1)
      setParams({ ...params, offset: params.offset - 20 })
    }
  }

  // console.log(dataToSend)

  return (
    <>
      <div className='listWrapper'>
      {
        listPokemon?.map((pikachu) => 
          <PokemonCard pikachu={pikachu}/>
        )
      }
      </div>
      <div className="pikachuPagination">
        <button onClick={handlePrev}>Предыдущее страница</button>
          <span>
            {currentPage + '/' + allPages}
          </span>
        <button onClick={handleNext}>Следующая страница</button>
      </div>
    </>
  )
}

export default PokemonList
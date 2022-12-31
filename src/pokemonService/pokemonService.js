import axios from 'axios'

export const fetchPokemonByName = async (name) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return data
  } catch (error) {
    throw error
  }
}

export const fetchAllPokemon = async (params) => {
  console.log(params)
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon', { params })
    return data
  } catch (error) {
    throw error
  }
}

export const fetchPokemonById = async (url) => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    throw error
  }
}
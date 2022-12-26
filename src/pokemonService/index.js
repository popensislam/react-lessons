import axios from 'axios'

const url = 'https://pokeapi.co/api/v2/'
const ENDPOINTS = {
  pokemon: 'pokemon/'
}

export const fetchPokemonByName = async (name) => {
  try {
    const { data } = await axios.get(url + ENDPOINTS.pokemon + name)
    return data
  } catch (error) {
    throw error
  }
}
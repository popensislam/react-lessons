import axios from 'axios'

 export const fetchTodo = async (data) => {
  const params = {
    _limit: data._limit,
    _page: data._page
  }
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos', {        params: {
        _limit: params._limit,
        _page: params._page
       }
    })
    return data
  } catch (error) {
    throw error
  }
}
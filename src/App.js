import React, { createContext, useState } from "react";
import FetchPage from "./pages/FetchPage";
import ToDoList from "./pages/ToDoList";
import "./styles/style.css";

export const Context = createContext()

function App() {

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('id')

  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(2)


  return (
    <div className="App">
    <Context.Provider value={{search, setSearch, sortBy, setSortBy, offset, setOffset, page, setPage, limit, setLimit}}>
      {/* <ToDoList /> */}
      <FetchPage/>
    </Context.Provider>
    </div>
  );
}

export default App;

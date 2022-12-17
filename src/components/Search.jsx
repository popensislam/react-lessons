import { useContext } from "react";
import { Context } from "../App";

const Search = () => {

  const {search, setSearch} = useContext(Context)

  return ( 
    <div>
      <h3>Поиск</h3>
      <input value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
   );
}
 
export default Search;
import { useContext } from "react";
import { Context } from "../App";

const SortBy = () => {

  const {sortBy, setSortBy} = useContext(Context)

  return ( 
    <div>
      <button style={sortBy === 'id' ? {background: '#a3a3a3'} : {}} onClick={() => setSortBy('id')}>BY ID</button>
      <button style={sortBy === 'letter' ? {background: '#a3a3a3'} : {}} onClick={() => setSortBy('letter')}>BY LETTER</button>
    </div>
   );
}
 
export default SortBy;
import { useContext, useEffect, useState } from "react";
import { Context } from "../App";


const Pagination = () => {
  const {page, limit, setOffset, offset, setPage} = useContext(Context)

  const [allPages, setAllPages] = useState(0)

  
  useEffect(() => {
    const stateStr = localStorage.getItem('tasks')
    const state = JSON.parse(stateStr)
    const allPages = Math.round(state.length / limit)

    setAllPages(prev => allPages)
  }, [limit, offset])

  const handleNext = () => {
    if (page !== allPages) {
      setOffset(prev => prev + 2)
      setPage(prev => prev + 1)
    }
  }
  const handlePrev = () => {
    if (page !== 1) {
      setOffset(prev => prev - 2)
      setPage(prev => prev - 1)
    }
  }

  return ( 
    <div style={{display: 'flex', gap: '10px'}}>
      <button onClick={handlePrev}>prev</button>
      <p>{page}/{allPages}</p>
      <button onClick={handleNext}>next</button>
    </div>
   );
}
 
export default Pagination;
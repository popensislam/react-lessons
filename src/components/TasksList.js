import { useContext } from "react";
import { Context } from "../App";
import { useFilter, useSort, useSum } from "../hooks/hooks";
import TaskItem from "./TaskItem";

const FilterByTitle = (item, search) => {
  if (item.title.includes(search)) {
    return item
  }
}

const TasksList = ({handleOpen, handleDone, removeTask, state}) => {

  const {search, sortBy, limit, offset} = useContext(Context)

  const newData = useFilter(state, search)
  const sortData = useSort(state, search)

  const getSearch = () => {
   switch (sortBy) {
    case 'id': {
      return newData
    }
    case 'letter': {
      return sortData
    }
    default: 
        return state.filter((item) => FilterByTitle(item, search))
   }
  }

  return ( 
    <>
      {getSearch()?.slice(offset, offset + limit)?.map((task) => (
        <TaskItem key={task.id} task={task} handleOpen={handleOpen} handleDone={handleDone} removeTask={removeTask}/>
      ))}
    </>

   );
}
 
export default TasksList;
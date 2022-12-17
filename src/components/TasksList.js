import { useContext } from "react";
import { Context } from "../App";
import TaskItem from "./TaskItem";

const FilterByTitle = (item, search) => {
  if (item.title.includes(search)) {
    return item
  }
}

const TasksList = ({handleOpen, handleDone, removeTask, state}) => {

  const {search, sortBy, limit, offset} = useContext(Context)

  const getSearch = () => {
   switch (sortBy) {
    case 'id': {
      const newState = state.sort((a, b) => a.id - b.id)
      return newState.filter((item) => FilterByTitle(item, search))
    }
    case 'letter': {
      const newStateByTitle = state.sort((a, b) => a.title.localeCompare(b.title))
      return newStateByTitle.filter((item) => FilterByTitle(item, search))
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
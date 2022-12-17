const TaskItem = ({task, handleOpen, handleDone, removeTask}) => {
  return ( 
    <div key={task.id} className="task-item">
    <h3 onClick={() => handleOpen(task)}>Заголовок: {task.title}</h3>
    <h3 onClick={() => handleOpen(task)}>Описание: {task.desc}</h3>
    <button
      onClick={() => handleDone(task.id)}
      style={task.completed ? { background: "green" } : { background: "red" }}
    >
      done
    </button>
    <button
      onClick={() => removeTask(task)}
      style={{ background: "red" }}
    >
      Deleted
    </button>
    </div>
   );
}
 
export default TaskItem;
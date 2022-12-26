import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Context } from "../App";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import SortBy from "../components/SortBy";
import TasksList from "../components/TasksList";
import Timer from "../components/Timer";
import ModalAddTask from "../components/UI/ModalAddTask";

const tasks = [
  { id: 1, title: "Сходить в магазин", desc: "Описание задачи", completed: true },
  { id: 2, title: "Убраться дома", desc: "Описание задачи", completed: false },
];

const ToDoList = () => {

  const [state, setState] = useState([]);

  const [show, setShow] = useState(false);

  const [isAdd, setIsAdd] = useState(true)

  const [value, setValue] = useState({
    title: "",
    desc: "",
  });
  const clearState = () => {
    setValue({ title: "", desc: "" });
  };

  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleDone = (id) => {
    const newState = state.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setState(newState);
  };
  const addTask = (item) => {
    const newState = [...state, item];
    setState(newState);
  };
  const editTask = (task) => {
    const newState = state.map((item) => {
      if (item.id === task.id) {
        return { ...item, title: task.title, desc: task.desc };
      } else {
        return item;
      }
    });
    setState(newState);
    setIsAdd(true)
    clearState()
  };
  const removeTask = (task) => {
    const newState = state.filter((item) => item.id !== task.id)
    setState(newState)
  } 

  const handleOpen = (task) => {
    setValue(task);
    setShow(true);
    setIsAdd(false)
  };

  useEffect(() => {
    const oldTasks = localStorage.getItem('tasks')

    if (oldTasks) {
      setTimeout(() => {
        setState(JSON.parse(oldTasks))
      }, 2000)
      return
    }

    setTimeout(() => {
      setState(tasks)
    }, 2000)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state))
  }, [state])

  return (
    <div className="flex">
      <Search/>
      <SortBy/>
      <button onClick={() => setShow(true)}>Add new task</button>
      {show && (
        <ModalAddTask
          handleOnChange={handleOnChange}
          editTask={editTask}
          addTask={addTask}
          hide={() => setShow(false)}
          value={value}
          setValue={setValue}
          isAdd={isAdd}
        />
      )}
      {state.length === 0 && (<h1>Loading...</h1>)}
      <TasksList 
        handleOpen={handleOpen} handleDone={handleDone} removeTask={removeTask} state={state}
      />
      <Pagination state={state} />
    </div>
  );
};

export default ToDoList;

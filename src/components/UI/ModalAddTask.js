import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const ModalAddTask = ({ isAdd, handleOnChange, addTask, hide, value, setValue, editTask }) => {

  return (
    <div className="wrapper">
      <div className="wrapperInput">
        <input
          className="input"
          name="title"
          value={value.title}
          onChange={(e) => handleOnChange(e)}
        />
        <Input value={value} handleOnChange={handleOnChange}/>
      </div>

      <Button hide={hide} editTask={editTask} addTask={addTask} value={value} isAdd={isAdd} />
    </div>
  );
};

export default ModalAddTask;

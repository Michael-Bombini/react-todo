import React, { useState } from "react";
import './TodoElement.css';

const TodoElement = (props) => {
  const [theTodo, setTheTodo] = useState(props.todo);
  
  const todoDoneHandle = () => {
    setTheTodo({ ...theTodo, done: !theTodo.done });
  };
  const todoDeleteHandle = () => {
    console.log(props.index);
    props.onDeleteTodo(props.index);
  }
  return (
    <div className={theTodo.done ? "done" : ""}>
      {theTodo.text} {theTodo.done}{" "}
      <button onClick={todoDoneHandle}>Mark as done</button>
      <button onClick={todoDeleteHandle}>Delete</button>
    </div>
  );
};

export default TodoElement;

import React from "react";
import './TodoElement.css';

const TodoElement = (props) => {
  
  const todoDoneHandle = () => {
    props.onMarkAsDone(props.index);
  };
  const todoDeleteHandle = () => {
    console.log(props.index);
    props.onDeleteTodo(props.index);
  }
  return (
    <div className={props.todo.done ? "done" : ""}>
      {props.todo.text} {props.todo.done}{" "}
      <button onClick={todoDoneHandle}>Mark as done</button>
      <button onClick={todoDeleteHandle}>Delete</button>
    </div>
  );
};

export default TodoElement;

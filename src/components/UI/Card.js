import React, { useState } from "react";
import AddTodo from "../Todo/AddTodo";
import './Card.css';

const Card = () => {
  const [todo,setTodo] = useState([{}]);
  
  const addTodo = (todo) => {
    console.log("arrivato in card");
    console.log(todo);
  };

  return (
    <div className="todo__card">
      <AddTodo onAddTodo={addTodo}/>
    </div>
  );
};

export default Card;

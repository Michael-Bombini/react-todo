import React from "react";
import AddTodo from "../Todo/AddTodo";
import './Card.css';

const Card = () => {
  return (
    <div className="todo__card">
      <AddTodo />
    </div>
  );
};

export default Card;

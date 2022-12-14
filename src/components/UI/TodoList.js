import React, { useState } from "react";
import AddTodo from "../Todo/AddTodo";
import TodoElement from "../Todo/TodoElement";
import "./TodoList.css";

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    console.log("arrivato in card");
    console.log(newTodo);

    setTodo((currentTodos) => {
      return [...currentTodos, newTodo];
    });
  };
  
  const markAsDone = (ind) => {
    const newTodos = [...todo];
    newTodos[ind].done = !newTodos[ind].done;
    setTodo(newTodos);
  };

  const editTodo = ind => {
    const newTodos = [...todo];
    newTodos[ind].text = 'a';
    setTodo(newTodos);
  }

  const deleteTodo = (ind) => {
    const newTodos = [...todo].filter((elem, index) => index !== ind);
    setTodo(newTodos);
  };

  

  return (
    <div className="todo__card">
      <AddTodo onAddTodo={addTodo} />
      {todo.map((el, index) => (
        <TodoElement
          key={el.text + index}
          todo={el}
          index={index}
          onDeleteTodo={deleteTodo}
          onMarkAsDone={markAsDone}
          onEditTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

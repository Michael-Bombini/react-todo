import React, { useState } from 'react'

const AddTodo = (props) => {
const [textTodo , setTextTodo] = useState('');

const inputHandler = (e) =>{
  setTextTodo(e.target.value);
};

const sendTodo = () => {
  props.onAddTodo(textTodo);
}


  return (
    <div>
      <input type="text" onChange={inputHandler} value={textTodo}/>
      <button type='submit' onClick={sendTodo}>add to do</button>
    </div>
  )
}

export default AddTodo
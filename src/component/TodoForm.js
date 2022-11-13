import React, { useState } from "react";
export default function TodoForm(props) {

  const [input, setInput] = useState('');



  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({
      id: Math.floor(Math.random() * 100000),
      text: input,
      isComplete: false
    })
    setInput('')

  }
  return <form className="todo-form">

    <input type="text" placeholder="add a todo" onChange={handleChange} className="todo-form" value={input} name=".text"></input>
    <button type="submit" onClick={handleSubmit} className="todo-btn">ADD TODO</button>
  </form>

}
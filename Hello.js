import React, { useState, useEffect, memo } from 'react';

const Todo = memo(({todo }) => <h1>{todo.item}</h1>)

const AddTodo = ({ onClick }) => {
  const [ text, setText ] = useState("");

  function onSubmit(e) {
    e.preventDefault()
    onClick(text)
    setText("")
  }

  return  (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
  )
}

export default function Todos() {
  const [ todos, setTodos ] = useState([{ item: "Task 1", selected: false}, { item: "Task 2", selected: false }]);

  return (
    <>
    <AddTodo onClick={(text) => setTodos([ ...todos, { item: text, selected: false }])} />
    {todos.map((todo, index) => (<Todo todo={todo} key={index} />))}
    </>
  )
}

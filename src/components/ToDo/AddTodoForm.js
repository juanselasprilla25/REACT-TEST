import React, { useState } from "react"

export const AddTodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("")

  const HandleChange = e => {
    setNewTodo(e.target.value)
  }

  const HandleSubmit = e => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo("")
  }

  return (
    <form className="todoForm">
      <input type="text" value={newTodo} onChange={HandleChange} tabIndex="0" />
      <button type="submit" onClick={HandleSubmit} tabIndex="0">
        Add Todo
      </button>
    </form>
  )
}

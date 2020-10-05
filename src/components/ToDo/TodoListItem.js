import React from "react"
import "./TodoListItem.css"

export const TodoListItem = ({ todo, toggleTodo, deleteTodo, updateTodo }) => {
  return (
    <>
      <li>
        <div>
          <input
            type="checkbox"
            // onChange={() => todo.complete}
            checked={todo.complete}
            onClick={() => toggleTodo(todo)}
            tabIndex="0"
          />
          <label
            className={todo.complete ? "complete" : undefined}
            onClick={() => updateTodo(todo)}
            tabIndex="0"
          >
            {todo.text}
          </label>
        </div>
        <div className="icons">
          <button id="delete" onClick={() => deleteTodo(todo)} tabIndex="0">
            <i className="far fa-trash-alt"></i>
          </button>
          <button id="update" onClick={() => updateTodo(todo)} tabIndex="0">
            <i className="fas fa-edit"></i>
          </button>
        </div>
      </li>
    </>
  )
}

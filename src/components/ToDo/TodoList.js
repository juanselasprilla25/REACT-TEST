import React from "react"
import { TodoListItem } from "./TodoListItem"

export const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        )
      })}
    </ul>
  )
}

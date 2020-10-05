import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { TodoList } from "./../components/ToDo/TodoList"
import { AddTodoForm } from "./../components/ToDo/AddTodoForm"

import { connect } from "react-redux"

const TODOS = ({ count, add, less, update }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={add}>ADD</button>
    <button onClick={less}>DELETE</button>
    <button onClick={update}>UPDATE</button>
  </div>
)

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch({ type: `ADD_TODO` }),
    less: () => dispatch({ type: `DELETE_TODO` }),
    update: () => dispatch({ type: `UPDATE_TODO` }),
  }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(TODOS)

const initialTodos = [
  { text: "Write Covid Tracker", complete: true },
  { text: "Upload App", complete: false },
  { text: "Learn Hard JavaScript", complete: false },
  { text: "Learn TypeScript", complete: false },
]

export default function ToDo() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }])
  }

  const deleteTodo = selectedTodo => {
    const newTodos = [...todos]
    newTodos.splice(selectedTodo, 1)
    setTodos(newTodos)
  }

  const updateTodo = selectedTodo => {
    return alert(`updated ${selectedTodo.text}`)
  }

  return (
    <Layout>
      <SEO title="ToDo List" />
      <h1>ToDo List</h1>
      <div className="ToDo">
        {/* <ConnectedCounter /> */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
        <AddTodoForm addTodo={addTodo} />
      </div>
      <Link to="/" className="button">
        Go back to the homepage
      </Link>
    </Layout>
  )
}

// <script
//   src="https://kit.fontawesome.com/e0e17162fa.js"
//   crossorigin="anonymous"
// ></script>

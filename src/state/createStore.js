import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  switch (action.type) {
    case `ADD_TODO`:
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    case `DELETE_TODO`:
      return Object.assign({}, state, {
        count: state.count - 1,
      })
    case `UPDATE_TODO`:
      return Object.assign({}, state, {
        count: (state.count = 0),
      })
    default:
      return state
  }
}

const initialState = { count: 0 }

const initialTodos = [
  { text: "Write Covid Tracker", complete: true },
  { text: "Upload App", complete: false },
  { text: "Learn Hard JavaScript", complete: false },
  { text: "Learn TypeScript", complete: false },
]

const createStore = () =>
  reduxCreateStore(reducer, { initialState, initialTodos })
export default createStore

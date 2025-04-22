import { createContext, useReducer } from 'react'

const TaskContext = createContext()

const initialState = {
  tasks: []
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] }
    case 'DELETE_TASK':
      return { tasks: state.tasks.filter(task => task.id !== action.payload) }
    case 'TOGGLE_TASK':
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      }
    default:
      return state
  }
}

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskContext, TaskProvider } 
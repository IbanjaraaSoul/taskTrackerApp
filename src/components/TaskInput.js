import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import styles from './TaskInput.module.css'

const TaskInput = () => {
  const [text, setText] = useState('')
  const { dispatch } = useContext(TaskContext)

  const handleAdd = () => {
    if (!text.trim()) return
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text, completed: false } })
    setText('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div className={styles.taskInput}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="What needs to be done?"
        className={styles.input}
      />
      <button onClick={handleAdd} className={styles.addButton}>
        Add Task
      </button>
    </div>
  )
}

export default TaskInput 
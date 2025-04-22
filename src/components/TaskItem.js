import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import styles from './TaskItem.module.css'

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext)

  return (
    <li className={styles.taskItem}>
      <div className={styles.taskContent}>
        <span className={`${styles.taskText} ${task.completed ? styles.completed : ''}`}>
          {task.text}
        </span>
        <div className={styles.taskActions}>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
            className={`${styles.button} ${task.completed ? styles.undoButton : styles.doneButton}`}
          >
            {task.completed ? 'Undo' : 'Done'}
          </button>
          <button
            onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
            className={`${styles.button} ${styles.deleteButton}`}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TaskItem 
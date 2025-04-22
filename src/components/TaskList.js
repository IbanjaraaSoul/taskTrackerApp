import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskItem from './TaskItem'
import styles from './TaskList.module.css'

const TaskList = () => {
  const { tasks } = useContext(TaskContext)

  if (!tasks.length) return (
    <div className={styles.emptyState}>
      <p>No tasks yet! Add one to get started.</p>
    </div>
  )

  return (
    <ul className={styles.taskList}>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList 
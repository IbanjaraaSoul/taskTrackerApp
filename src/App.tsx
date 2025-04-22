import { TaskProvider } from './context/TaskContext'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './styles/global.css'
import styles from './App.module.css'

const App: React.FC = () => (
  <TaskProvider>
    <div className={styles.appContainer}>
      <div className={styles.appContent}>
        <h1 className={styles.appTitle}>Task Tracker</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  </TaskProvider>
)

export default App 
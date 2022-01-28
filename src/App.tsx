import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { Task } from './interfaces/Task'
import logo from './logo.svg'
interface Props {
  title?: string
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Learn React uwu',
      description: 'Learn React',
      completed: false,
    },
  ])

  const getCureenTimeStamp = (): number => new Date().getTime()

  const newAddTasks = (task: Task) => {
    setTasks([
      ...tasks,
      { ...task, id: getCureenTimeStamp(), completed: false },
    ])
  }

  const deleteATask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id))

  return (
    <div className="bg-dark text-white" style={{ height: '100vh' }}>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} style={{ width: '4rem' }} alt="" />
            {title ? <h1>{title}</h1> : <h1>No hay titulo perras</h1>}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm newAddTasks={newAddTasks} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks}
              deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

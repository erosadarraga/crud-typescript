import { AiOutlinePlus } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from '../interfaces/Task'

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const initialState = {
  title: '',
  description: '',
}

interface Props {
  newAddTasks: (task: Task) => void
}
export default function TaskForm({ newAddTasks }: Props) {
  const [task, setTask] = useState(initialState)
  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value })
  }

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    newAddTasks(task)
    setTask(initialState)
  }

  return (
    <div className=" card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Write a Description"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>
        <button className="btn btn-primary">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  )
}

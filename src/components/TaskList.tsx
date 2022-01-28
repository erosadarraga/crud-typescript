import React from 'react'
import { Task } from '../interfaces/Task';
import TaskCard from './TaskCard'
interface Props {
  tasks: Task[]
  deleteATask:(id:number)=>void
}

export default function TaskList({ tasks ,deleteATask}: Props) {
  return (
    <>
      {tasks.map((task) => (
        <div className="col-md-3" key={task.id}>
          <TaskCard task={task} deleteATask={deleteATask} />
        </div>
      ))}
    </>
  )
}

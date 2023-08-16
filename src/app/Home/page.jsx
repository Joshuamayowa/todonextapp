"use client"
import { useState } from "react"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"



export default function Home() {
  const [tasks, setTasks] = useState([])

  const handleAddTodo = (newTask) => {
    setTasks([...tasks, newTask])
  }
  return (
    <main>
      <h1>my task management app</h1>
      <TaskForm onAddTask={handleAddTodo} />
      <TaskList tasks={tasks} />
    </main>
  )
}

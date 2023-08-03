import { v4 as uuidv4 } from "uuid"
import { useState } from "react"

export default function TaskForm({onAddTask}) {
    const [taskName, setTaskName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const newTask = {
            id: uuidv4(),
            taskName,
            startDate,
            endDate
        }
        onAddTask(newTask)
        setTaskName('')
        setStartDate('')
        setEndDate('')
    }
  return (
    <section className="mt-10">
    <form onSubmit={handleClick}>
        <input 
        type="text" 
        name="text" 
        placeholder="add a task"
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)}/>

        <label>Start date: </label>
        <input type="date" 
        name="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        />
       
       <label>End date: </label>
        <input type="date" 
        name="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        />

        <button type="submit">Add todo</button>
    </form>
    </section>
  )
}

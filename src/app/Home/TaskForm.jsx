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
            endDate,
            isDone: false,
        }
        onAddTask(newTask)
        setTaskName('')
        setStartDate('')
        setEndDate('')
    }
  return (
    <section className="h-[37rem] bg-[url(/office.avif)] bg-cover">
      <div className="pt-20 text-center">
    <form onSubmit={handleClick}>
        <input className="text-2xl rounded-xl text-center"
        type="text" 
        name="text" 
        placeholder="add a task"
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)}/>

        <p className="mt-5 text-2xl  hover:text-sky-100">
        <label className="font-bold rounded-xl bg-sky-500">Start date: </label>
        <input type="date" 
        name="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        />
       </p>

       <p className="mt-5 text-2xl hover:text-sky-100">
       <label className="font-bold rounded-xl bg-sky-500">End date: </label>
        <input type="date" 
        name="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        />
        </p>
        <button type="submit" className="font-bold bg-sky-600 hover:text-slate-100 mt-5 rounded-xl text-2xl">Add todo</button>
    </form>
    </div>
    </section>
  )
}

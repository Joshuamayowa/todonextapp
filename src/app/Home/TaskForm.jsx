import { v4 as uuidv4 } from "uuid"
import { useState } from "react"


export default function TaskForm({onAddTask}) {
    const [taskName, setTaskName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [priority, setPriority] = useState("low"); 

  const priorities = ["low", "medium", "high"];

    const handleClick = (e) => {
        e.preventDefault()
        const newTask = {
            id: uuidv4(),
            taskName,
            startDate,
            endDate,
            priority,
            isDone: false,
        }
        onAddTask(newTask)
        setTaskName('')
        setStartDate('')
        setEndDate('')
        setPriority("low")
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

        <p className="mt-5 text-2xl  hover:text-blue-100">
        <label className="font-bold rounded-xl bg-blue-500">Start date: </label>
        <input type="date" 
        name="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        />
       </p>

       <p className="mt-5 text-2xl hover:text-blue-100 gap-1" >
       <label className="font-bold rounded-xl w-40 border-spacing-1  bg-blue-500">End date : </label>
        <input className="rounded-xl"
         type="date" 
        name="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        />
        </p>
        <p className="mt-5 text-xl ">
            <label className="font-bold rounded-xl w-36 bg-blue-500">Priority: </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="bg-white rounded-xl "
            >
              {priorities.map((priorityOption) => (
                <option key={priorityOption} value={priorityOption}>
                  {priorityOption}
                </option>
              ))}
            </select>
          </p>
        <button type="submit" className="font-bold bg-blue-600 hover:text-blue-100 mt-5 rounded-2xl w-36 text-2xl">Add todo</button>
    </form>
    </div>
    </section>
  )
}


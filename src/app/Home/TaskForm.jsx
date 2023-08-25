"use client"
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function TaskForm({ onAddTask }) {
    const [taskName, setTaskName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [taskPriority, setTaskPriority] = useState("");
    

    const handleClick = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            taskName,
            startDate,
            endDate,
            taskPriority
        };
        
        localStorage.setItem("newTask", JSON.stringify(newTask));
        onAddTask(newTask);
        setTaskName("");
        setStartDate("");
        setEndDate("");
        setTaskPriority("");
    };

    return (
        <form onSubmit={handleClick} className="p-4 bg-slate-200 rounded-lg shadow-md">
            <input 
                type="text" 
                name="text" 
                placeholder="Add a task"
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-700"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="mr-2">Start date: </label>
                    <input 
                        type="date" 
                        name="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-700"
                    />
                </div>
                <div className="flex items-center">
                    <label className="mr-2">End date: </label>
                    <input 
                        type="date" 
                        name="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-700"
                    />
                </div>
            </div>

            <div className="flex mb-4">
                <label className="mr-2">Priority: </label>
                <select 
                    name="priority" 
                    onChange={(e) => setTaskPriority(e.target.value)}
                    className="p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value="high">High</option>
                    <option value="low">Low</option>
                </select>
            </div>

            <button 
                type="submit" 
                className="px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 w-full"
            >
                Create Task
            </button>
        </form>
    );
}

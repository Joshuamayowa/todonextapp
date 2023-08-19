import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("low");

  const priorities = ["low", "medium", "high"];

  const handleClick = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      taskName,
      startDate,
      endDate,
      priority,
      isDone: false,
    };
    onAddTask(newTask);
    setTaskName("");
    setStartDate("");
    setEndDate("");
    setPriority("low");
  };

  return (
    <section className="h-[37rem] bg-[url(/office.avif)] bg-cover">
      <div className="pt-20 text-center">
        <form onSubmit={handleClick} className="space-y-5">
          <input
            className="text-2xl rounded-xl text-center px-4 py-2 bg-white"
            type="text"
            name="text"
            placeholder="Add a task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />

          <div className="flex space-x-5 pl-10">
            <label className="text-xl font-bold rounded-xl bg-blue-500 px-4 py-2">
              Start date:
            </label>
            <input
              type="date"
              name="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="rounded-xl py-2 px-4 bg-white"
            />
          </div>

          <div className="flex space-x-5 pl-10">
            <label className="text-xl font-bold rounded-xl bg-blue-500 px-4 py-2 w-36">
              End date:
            </label>
            <input
              type="date"
              name="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="rounded-xl py-2 px-4 bg-white"
            />
          </div>

          <div className="flex space-x-5 text-center">
            <label className="text-xl font-bold rounded-xl bg-blue-500 px-4 py-2 w-36 pl-10">
              Priority:
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="bg-white rounded-xl py-2 px-4"
            >
              {priorities.map((priorityOption) => (
                <option key={priorityOption} value={priorityOption}>
                  {priorityOption}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="font-bold bg-blue-600 hover:text-blue-100 mt-5 rounded-2xl w-36 text-2xl py-2"
          >
            Add Todo
          </button>
        </form>
      </div>
    </section>
  );
}

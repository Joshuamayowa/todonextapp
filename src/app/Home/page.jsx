"use client"
import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Home() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleEditStartDate = (taskId, newStartDate) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, startDate: newStartDate };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleEditEndDate = (taskId, newEndDate) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, endDate: newEndDate };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleEditTask = (taskId, newEdit) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, save: newEdit};
            } 
            return task;
        });
        setTasks(updatedTasks);
    };


    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <main className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4 md:pt-28 pt-20">
            <div className="w-full max-w-md p-4 md:p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-xl md:text-2xl font-semibold mb-4 text-center capitalize">task manager </h1>
                <TaskForm onAddTask={handleAddTask} />
                <TaskList 
                    tasks={tasks} 
                    onEditStartDate={handleEditStartDate}
                    onEditEndDate={handleEditEndDate}
                    onEditTask={handleEditTask}
                    onDeleteTask={handleDeleteTask}
                />
            </div>
        </main>
    );
}

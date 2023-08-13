"use client"
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleUpdateTask = (taskId, updatedTaskName) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, taskName: updatedTaskName };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Task List</h1>
      <TaskForm onAddTask={handleAddTask} />
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={handleDeleteTask}
          onUpdateTask={handleUpdateTask}
        />
      ))}
    </div>
  );
}

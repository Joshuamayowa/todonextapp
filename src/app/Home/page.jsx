"use client"
import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import EditTaskModal from "./EditTaskModal"; 

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [editingTaskName, setEditingTaskName] = useState("");
  

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setEditingTaskName(task.taskName);
  };

  const handleSaveEditedTask = (editedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === editedTask.id) {
        return {
          ...editedTask,
          taskName: editingTaskName,
        };
      }
      return task;
    });
  
    setTasks(updatedTasks);
    setEditingTask(null);
    setEditingTaskName("");
  };
  
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold mb-4 mt-10 items-center text-center">
        My Task Management App
      </h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSaveEditedTask={handleSaveEditedTask}
          onCancel={() => setEditingTask(null)}
        />
      )}
    </main>
  );
}

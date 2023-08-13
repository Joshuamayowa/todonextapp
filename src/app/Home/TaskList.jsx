import React from 'react';
import TaskItem from './TaskItem';

export default function TasksPage() {
  const task = {
    id: 1,
    taskName: 'Sample Task',
    startDate: '2023-08-13',
    endDate: '2023-08-20',
  };

  const onDeleteTask = (taskId) => {
    console.log('Deleting task with ID:', taskId);
  };

  const onUpdateTask = (taskId, updatedTaskName) => {
    console.log('Updating task with ID:', taskId, 'New Task Name:', updatedTaskName);
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Task List</h1>
      <TaskItem task={task} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} />
    </div>
  );
}

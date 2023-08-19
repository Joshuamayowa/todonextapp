import React, { useState } from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onDeleteTask, onEditStartDate, onEditEndDate }) {
  return (
    <section>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onEditStartDate={onEditStartDate}
          onEditEndDate={onEditEndDate}
        />
      ))}
    </section>
  );
}

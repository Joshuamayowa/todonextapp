import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
    const handleDeleteTask = (taskId) => {
        onDeleteTask(taskId);
    };

    const handleEditTask = (taskId, updatedTaskName) => {
        onEditTask(taskId, updatedTaskName);
    };

    return (
        <section className="space-y-4">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onEditTask={handleEditTask}
                    onDeleteTask={handleDeleteTask}
                />
            ))}
        </section>
    );
};

export default TaskList;

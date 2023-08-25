import React, { useState } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { BsSaveFill } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';

export default function TaskItem({ task, onEditTask, onDeleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEditTask(editedTask);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        onDeleteTask(task.id);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    return (
        <section className="border rounded p-4 mb-4">
            {isEditing ? (
                <div className="space-y-2">
                    <input
                        type="text"
                        name="taskName"
                        value={editedTask.taskName}
                        onChange={handleInputChange}
                        className="border rounded p-2 w-full"
                    />
                    <input
                        type="date"
                        name="startDate"
                        value={editedTask.startDate}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                    />
                    <input
                        type="date"
                        name="endDate"
                        value={editedTask.endDate}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                    />
                    <select
                        name="taskPriority"
                        value={editedTask.taskPriority}
                        onChange={handleInputChange}
                        className="border rounded p-2 w-full"
                    >
                        <option value="low">Low</option>
                        <option value="high">High</option>
                    </select>
                    <div className="flex space-x-2 mt-2">
                        <button
                            onClick={handleSaveClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
                        >
                            <BsSaveFill />
                        </button>
                        <button
                            onClick={handleCancelClick}
                            className="bg-gray-400 text-white px-4 py-2 rounded w-full hover:bg-gray-500"
                        >
                            <GiCancel />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{task.taskName}</h3>
                    <p>Start date: {task.startDate}</p>
                    <p>End date: {task.endDate}</p>
                    <p>Priority: {task.taskPriority}</p>
                    <div className="flex space-x-2">
                        <button
                            onClick={handleEditClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            <BsFillPencilFill />
                        </button>
                        <button
                            onClick={handleDeleteClick}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            <MdDelete />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

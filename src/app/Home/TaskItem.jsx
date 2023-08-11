import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { BiPencil } from 'react-icons/bi';
import { FaRegSave } from 'react-icons/fa';

export default function TaskItem({ task, onDeleteTask, onUpdateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.taskName);

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = () => {
    onUpdateTask(task.id, editedTaskName);
    setIsEditing(false);
  };

  return (
    <section className="border p-4 rounded-lg shadow-md mb-4">
      {isEditing ? (
        <input
          className="w-full py-2 px-4 rounded-lg text-xl text-center border focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          name="text"
          value={editedTaskName}
          onChange={(e) => setEditedTaskName(e.target.value)}
        />
      ) : (
        <h3 className="text-slate-800 text-xl font-semibold mb-2">{task.taskName}</h3>
      )}
      <p className="font-semibold mb-1">Start date: {task.startDate}</p>
      <p className="font-semibold mb-1">End date: {task.endDate}</p>
      <div className="flex items-center">
        {isEditing ? (
          <button
            className="text-xl font-semibold text-green-600 hover:text-green-800 mr-4"
            onClick={handleSaveEdit}
          >
           <FaRegSave className="inline-block ml-1"  />
          </button>
        ) : (
          <button
            className="text-xl font-semibold text-blue-600 hover:text-blue-800 mr-4"
            onClick={handleEditToggle}
          >
          <BiPencil className="inline-block ml-1" />
          </button>
        )}
        <button
          className="text-xl font-semibold text-red-600 hover:text-red-800"
          onClick={handleDelete}
        >
         <MdDelete className="inline-block ml-1" />
        </button>
      </div>
    </section>
  );
}

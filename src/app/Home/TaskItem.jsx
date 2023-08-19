import React, { useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import { MdDelete, MdSaveAs } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';

export default function TaskItem({ task, onDeleteTask, onEditStartDate, onEditEndDate, onEditTask }) {
  const [editing, setEditing] = useState(false);
  const [editedStartDate, setEditedStartDate] = useState(task.startDate);
  const [editedEndDate, setEditedEndDate] = useState(task.endDate);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleEditStartDate = () => {
    onEditStartDate(task.id, editedStartDate);
    setEditing(false);
  };

  const handleEditEndDate = () => {
    onEditEndDate(task.id, editedEndDate);
    setEditing(false);
  };

  const handleEditTask = () => {
    onEditTask(task.id, editedStartDate, editedEndDate, editedTaskName);
    setEditing(false);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <section className="p-4 border rounded-md shadow-md mb-4">
      {editing ? (
        <div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Edit Start Date:</label>
            <input
              type="date"
              className="mt-5 block w-32 pl-20 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
              value={editedStartDate}
              onChange={(e) => setEditedStartDate(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700">Edit End Date:</label>
            <input
              type="date"
              className="mt-1 block w-32 pl-20 border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
              value={editedEndDate}
              onChange={(e) => setEditedEndDate(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <button
              className="px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={handleEditStartDate}
            >
              <MdSaveAs className="inline-block mr-1" />
              Save
            </button>
            <button
              className="px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={handleEditToggle}
            >
              <ImCancelCircle className="inline-block mr-1" />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-2">{task.taskName}</h3>
          <p className="mb-2">Start date: {task.startDate}</p>
          <p className="mb-2">End date: {task.endDate}</p>
          <div className="flex space-x-2">
            <button
              className="px-3 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
              onClick={handleEditToggle}
            >
              <BsPencil className="inline-block mr-1" />
              Edit
            </button>
            <button
              className="px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={handleDelete}
            >
              <MdDelete className="inline-block mr-1" />
              Delete
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

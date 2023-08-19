import React, { useState } from "react";

export default function EditTaskModal({ task, onSaveEditedTask, onCancel }) {
  const [editedStartDate, setEditedStartDate] = useState(task.startDate);
  const [editedEndDate, setEditedEndDate] = useState(task.endDate);

  const handleSave = () => {
    const editedTask = { ...task, startDate: editedStartDate, endDate: editedEndDate };
    onSaveEditedTask(editedTask);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
        <label className="block mb-2">Edit Start Date:</label>
        <input
          type="date"
          value={editedStartDate}
          onChange={(e) => setEditedStartDate(e.target.value)}
          className="w-full mb-4"
        />
        <label className="block mb-2">Edit End Date:</label>
        <input
          type="date"
          value={editedEndDate}
          onChange={(e) => setEditedEndDate(e.target.value)}
          className="w-full mb-4"
        />
        <div className="mb-2">
  <label className="block text-sm font-medium text-gray-700">Edit Task Name:</label>
  <input
    type="text"
    className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
    value={editingTaskName}
    onChange={(e) => setEditingTaskName(e.target.value)}
  />
</div>
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

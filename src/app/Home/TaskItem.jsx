import React, { useState } from 'react';

export default function TaskItem({ task, onDeleteTask, onEditStartDate, onEditEndDate }) {
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

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <section>
      {editing ? (
        <div>
          <label>Edit Start Date: </label>
          <input
            type="date"
            value={editedStartDate}
            onChange={(e) => setEditedStartDate(e.target.value)}
          />
          <button onClick={handleEditStartDate}>Save</button>

          <label>Edit End Date: </label>
          <input
            type="date"
            value={editedEndDate}
            onChange={(e) => setEditedEndDate(e.target.value)}
          />
          <button onClick={handleEditEndDate}>Save</button>

          <button onClick={handleEditToggle}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{task.taskName}</h3>
          <p>Start date: {task.startDate}</p>
          <p>End date: {task.endDate}</p>
          <button onClick={handleEditToggle}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </section>
  );
}

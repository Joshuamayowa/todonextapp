import { useState } from 'react'
import {MdDelete} from 'react-icons/md'
import {BiPencil} from 'react-icons/bi'

export default function TaskItem({ task, onDeleteTask, onUpdateTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(task.taskName);
  
    const handleDelete = () => {
      onDeleteTask();
    };
  
    const handleEditToggle = () => {
      setIsEditing(!isEditing);
    };
  
    const handleSaveEdit = () => {
      onUpdateTask(task.id, editedTaskName);
      setIsEditing(false);
    };

  return (
    <section>
      {isEditing ? (
        <input
          className='text-2xl rounded-xl text-center'
          type='text'
          name='text'
          value={editedTaskName}
          onChange={(e) => setEditedTaskName(e.target.value)}
        />
      ) : (
        <h3 className='text-slate-800' id={task.id}>
          {task.taskName}
        </h3>
      )}
      <p className='font-bold'>Start date: {task.startDate}</p>
      <p className='font-bold'>End date: {task.endDate}</p>
      <div className='items-center'>
        {isEditing ? (
          <button className='text-xl font-bold' onClick={handleSaveEdit}>
            save
          </button>
        ) : (
          <button className='text-xl font-bold' onClick={handleEditToggle}>
            edit <BiPencil />
          </button>
        )}
        <button className='text-xl font-bold pl-10' onClick={handleDelete}>
          delete <MdDelete />
        </button>
      </div>


    </section>
  )
}




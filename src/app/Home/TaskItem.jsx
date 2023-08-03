import React from 'react'

export default function TaskItem({task}) {
  return (
    <section>
        <h3>{task.taskName}</h3>
        <p>Start date: {task.startDate}</p>
        <p>End date: {task.endDate}</p>
        <button>edit</button>
        <button>delete</button>
    </section>
  )
}

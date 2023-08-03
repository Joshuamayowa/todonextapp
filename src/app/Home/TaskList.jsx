import TaskItem from "./TaskItem"

export default function TaskList({tasks}) {
  return (
    <section>
        {tasks.map( task => (
            <TaskItem key={task.id} task={task}/>
        ))}
    </section>
  )
}

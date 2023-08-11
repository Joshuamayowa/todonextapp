import TaskItem from "./TaskItem"


export default function TaskList({tasks, onDeleteTask, onUpdateTask}) {
  return (
    <section>
        {tasks.map( task => (
            <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} />
        ))}
    </section>
  )
}

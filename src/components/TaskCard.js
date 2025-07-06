import React from 'react'

function TaskCard({task, handleDelete, info}) {
  return (
    <div>
       <li key={task.id} className={task.completed ? "completed" : "incomplete"}> 
            <span>{task.id} - {task.name} - {info}</span>
            <button onClick={()=> handleDelete(task.id)} className="delete">Delete</button>
        </li>
    </div>
  )
}
export default TaskCard
import React from 'react'
import {useState} from 'react';
import TaskCard from './TaskCard';
import { BoxCard } from './BoxCard';
export const TaskList = ({info}) => {

    const [tasks, setTasks] = useState([
        {id:1, name:"For an educational purpose", completed:true},
        {id:2, name:"To plant a tree", completed:false},
        {id:3, name:"For community", completed:false}
    ]);
    const [show, setShow] = useState(true);

    function handleDelete(id){
        setTasks(tasks.filter(task => id !== task.id))
    }
  return (
    <>
        <h1>Featured donation</h1>
        <ul>
            {/* { tasks.map(()=>{re})} */}
            <button className="trigger" onClick={()=>setShow(!show)}>Toggle</button>
            { show && tasks.map((task)=>(
               <TaskCard task={task} info={info} handleDelete={handleDelete} />
            ))}
        </ul>

        <BoxCard result="success">
            <p className="title">lorem </p>
            <p className="description">Lorem ipsum dolor sit</p>
        </BoxCard>

        <BoxCard result="warning">
            <p className="title">lorem ipsum dipsum</p>
            <p className="description">lorem ipsum dipsum color</p>
            <p>lorem ipsum dipsum lorem ipsum dipsum</p>
        </BoxCard>
    </>
  )
}
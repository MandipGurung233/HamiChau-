import React from 'react'
import {useState} from 'react';
import TaskCard from './TaskCard';
import { BoxCard } from './BoxCard';
import "./TaskList.css";
export const TaskList = ({info, tasks, setTasks}) => {
    const [show, setShow] = useState(true);
    const styles = {
        color: "red",
        padding: "20px",
        border:"1px solid",
        borderColor: show ? "blue" : "green"
    }
    function handleDelete(id){
        setTasks(tasks.filter(task => id !== task.id))
    }
  return (
    <section className='tasklist'>
        <h1 style={styles}>Featured donation</h1>
        <ul>
            {/* { tasks.map(()=>{re})} */}
            <button className="trigger" onClick={()=>setShow(!show)}>{show ? "Hide": "Show"}</button>
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
    </section>
  )
}
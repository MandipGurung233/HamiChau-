import './index.css';
import './App.css';
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import React from 'react';
import {TaskList} from "./components/TaskList";
import {Counter} from "./components/Counter";
import AddTask from "./components/AddTask";
import { useState } from 'react';

export function App () {

    const [tasks, setTasks] = useState([]);

    const info = "random";
    return ( 
        <>    
            <div className='App'>
                <Header/>
                <main>
                <Counter/>
                <AddTask tasks={tasks} setTasks={setTasks}/>
                <TaskList info={info} tasks={tasks} setTasks={setTasks}/>
                
                </main>
               <Footer/>          
            </div>  
        </>      
    );
}
export default App;

//older method of writing jsx
// export default function App(){
//     return React.createElement("h1", {className: "active"}, "mandip")
// }
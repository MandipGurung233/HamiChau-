import './index.css';
import './App.css';
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import React from 'react';
import {TaskList} from "./components/TaskList";
import {Counter} from "./components/Counter";

export function App () {
    const info = "random";
    return ( 
        <>    
            <div className='App'>
                <Header/>
                <Counter/>
                <TaskList info={info} />
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
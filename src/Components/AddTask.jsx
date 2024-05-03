import { useState } from "react";
import '../Components/AddTask.css';

function AddTask(){

    const[tasks,setTasks] = useState([]);
    const [task,setTask] = useState("");

    function handleAddTask(){
        setTasks(t=>[...t,task]);
        setTask("");
    }

    function handleTaskChange(event){
        setTask(t=>(t=event.target.value));
    }

    function handleUpvoteTask(index){
        if(index==0){return}
        setTasks(t=>{
            const updatedTask=[...t];
            var temp = updatedTask[index];
            updatedTask[index] = updatedTask[index-1];
            updatedTask[index-1]=temp;
            return updatedTask;
        });
    }
    function handleDownvoteTask(index){
        if(index==tasks.length-1){return}
        setTasks(t=>{
            const updatedTask=[...t];
            var temp=updatedTask[index];
            updatedTask[index]=updatedTask[index+1];
            updatedTask[index+1]=temp;
            return updatedTask;
        })

    }

    function handleDeleteTask(index){
        setTasks(t=>t.filter((_,i)=>i!=index));
    }
    return(
        <>
        <div className="input-box">
        <input type="text" onChange={handleTaskChange} placeholder=""id="" value={task}/>
        <button onClick={handleAddTask}>add task</button>
        </div>

        
        <ul>
        
            {tasks.map((task,index)=>
            <div className="list-items">
                <li key={index}>{task}<div className="button-array"><button onClick={()=>handleUpvoteTask(index)}>⬆️</button>
            <button onClick={()=>handleDownvoteTask(index)}>⬇️</button>
            <button onClick={()=>handleDeleteTask(index)}>❌</button></div></li></div>)}
        </ul>
        



        </>
        
    );
}
export default AddTask;
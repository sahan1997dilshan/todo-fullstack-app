import { useEffect,useState } from "react";
import { getTasks } from "../api";
import TaskCard from "./TaskCard";

function TaskList(){

 const [tasks,setTasks] = useState([]);

 const load = async ()=>{
   const res = await getTasks();
   setTasks(res.data);
 }

 useEffect(()=>{
   load();
 },[])

 return(
   <div>
     {tasks.map(t=>(
       <TaskCard key={t.id} task={t} refresh={load}/>
     ))}
   </div>
 )
}

export default TaskList;
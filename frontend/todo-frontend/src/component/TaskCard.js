import { completeTask } from "../api";

function TaskCard({task, refresh}){

 const done = async ()=>{
   await completeTask(task.id);
   refresh();
 }

 return(
   <div className="card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={done}>Done</button>
   </div>
 )
}

export default TaskCard;
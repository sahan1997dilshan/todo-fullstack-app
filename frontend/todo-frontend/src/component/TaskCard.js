import { completeTask } from "../api";

function TaskCard({task, refresh}){

 const done = async ()=>{
   await completeTask(task.id);
   refresh();
 }

 return(
   <div className="task-card">
      <div className="task-content">
        <h3>{task.title}</h3>
      <p>{task.description}</p>
      </div>
      <button className="done-button" onClick={done}>Done</button>
   </div>
 )
}

export default TaskCard;
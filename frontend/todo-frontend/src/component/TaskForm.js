import { useState } from "react";
import { createTask } from "../api";

function TaskForm({ refresh }) {

 const [title,setTitle] = useState("");
 const [description,setDescription] = useState("");

 const submit = async () =>{
   await createTask({
    title,
    description,
    completed:false
});
   setTitle("");
   setDescription("");
   refresh();
 }

 return (
   <div>
     <input
       placeholder="Title"
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
     />

     <input
       placeholder="Description"
       value={description}
       onChange={(e)=>setDescription(e.target.value)}
     />

     <button onClick={submit}>Add Task</button>
   </div>
 );
}

export default TaskForm;
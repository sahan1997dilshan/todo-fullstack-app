import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";

function App(){

 return(
   <div>
     <h1>Todo App</h1>
     <TaskForm refresh={()=>window.location.reload()} />
     <TaskList/>
   </div>
 )

}

export default App;
import './App.css';

import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";

function App() {

  return (
    <div className="page-container">
      <div className='form-section'>
        <TaskForm refresh={() => window.location.reload()} />
      </div>
      <div className="divider"></div>
      <div className="list-section">
        <TaskList />
      </div>

    </div>
  )

}

export default App;
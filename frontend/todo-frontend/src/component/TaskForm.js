import { useState } from "react";
import { createTask } from "../api";

function TaskForm({ refresh }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleError, setTitleError] = useState(false);

    const submit = async () => {

        if (!title.trim()) {
            setTitleError(true);
            return;
        }
        await createTask({
            title,
            description,
            completed: false
        });
        setTitle("");
        setDescription("");
        setTitleError(false);
        refresh();
    }

    return (
        <div>
            <h2 className="form-title">Add a Task</h2>
            <input
                className="form-input"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                    setTitleError(false);
                }}
            />

            {titleError && (
                <span className="error-text">Title is required</span>
            )}

            <textarea
                className="form-textarea"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <div style={{ textAlign: 'right' }}>
                <button className="add-button" onClick={submit}>Add</button>
            </div>
            
        </div>
    );
}

export default TaskForm;
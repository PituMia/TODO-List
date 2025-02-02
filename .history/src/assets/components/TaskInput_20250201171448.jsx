import React, { useState } from "react";
import "../css/TaskInput.css";


const TaskInput = ({ addTask }) => {
    const [text, setText] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        
        
        const trimmedText = text.trim();
        
        if (trimmedText.length > 0) {
            if (typeof addTask === 'function') {
                addTask(trimmedText);
                console.log(trimmedText);
                setText(""); 
            }
        } else {
            console.log("El texto no puede ser solo espacios.");
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleAddTask}>
                <div className="input d-flex justify-content-center" style={{ maxWidth: "50%", margin: "0 auto" }}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="New Task"
                        className="form-control col-9"
                        required
                        pattern=".*\S.*"
                    />
                    <button type="submit" className="btn btn-primary col-3">Add</button>
                </div>
            </form>
        </div>
    );
};

export default TaskInput
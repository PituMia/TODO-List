import React, { useState } from "react";
import "../css/TaskInput.css";


const TaskInput = ( {addTask} ) => {
    const [text, setText] = useState("");


    const handleAddTask = (e) => {
        e.preventDefault();
        if (typeof addTask === 'function') {
        addTask(text);
        console.log(text);
        setText("");}
        else {console.log("no es funcion")}



    }

    return (
        <div className="container">
            <form onSubmit={handleAddTask}>
                <div className="input d-flex justify-content-center " style={{ maxWidth: "50%", margin: "0 auto" }}>
                    <input type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="New Task"
                        className="form-control col-9" required />
                    <button type="submit"
                        className="btn btn-primary col-3">Add</button>
                </div>
            </form>
            <div className="d-flex justify-content-center">

            </div>
        </div>
    );

};

export default TaskInput
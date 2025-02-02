import React, {useState} from "react";
import TaskList from "./TaskList";

const TaskInput = () => {
    const [text, setText] = useState("");
    
    
    const handleAddTask = (e) =>{
        e.preventDefault();
        console.log(task);
        setText("");
        
    }
    
    return (
        <div className="container">
        <form onSubmit={handleAddTask}>
        <div className="d-flex justify-content-center " style={{ maxWidth: "50%", margin: "0 auto" }}>
            <input type="text" 
            value= {text}
            onChange={(e) => setText(e.target.value)}
            placeholder="New Task" 
            className="form-control col-9"  required/>
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
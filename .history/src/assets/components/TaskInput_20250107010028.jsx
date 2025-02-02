import React, {useState} from "react";

const TaskInput = () => {
    const [text, setText] = useState("");
    
    const Update = (input) =>{
        input.preventDefault();
        newText(task);
    }
    
    return (
        <form>
        <div className="d-flex justify-content-center" style={{ maxWidth: "50%", margin: "0 auto" }}>
            <input type="text" 
            value= {text}
            onChange={(e) => setText(e.target.value)}
            placeholder="New Task" 
            className="form-control col-9" />
            <button type="submit"
            className="btn btn-primary col-3">Add</button>
        </div>
        </form>

    )
};

export default TaskInput
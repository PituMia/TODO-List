import React from "react";

const TaskInput = () => {
    return (
        <div style={{ maxWidth: "50%" }}>
            <input type="text" 
            placehholder="New Task" 
            className="form-control mx-auto" />
            <button type="submit"
            className="form-control mx-auto">Add</button>
        </div>

    )
};

export default TaskInput
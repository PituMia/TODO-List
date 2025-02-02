import React from "react";

const TaskInput = () => {
    return (
        <div className="d-flex justify-content-center" style={{ maxWidth: "50%", margin: }}>
            <input type="text" 
            placehholder="New Task" 
            className="col-9" />
            <button type="submit"
            className="col-3">Add</button>
        </div>

    )
};

export default TaskInput
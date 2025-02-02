import React from "react";

const TaskInput = () => {
    return (
        <div className="d-flex justify-content-center" style={{ maxWidth: "50%"}}>
            <input type="text" 
            placehholder="New Task" 
            className="form-control col-9" />
            <button type="submit"
            className="btn btn-primary col-3">Add</button>
        </div>

    )
};

export default TaskInput
import React from "react";

const TaskInput = () => {
    return (
        <div className="d-flex" style={{ maxWidth: "50%" , margin: "0 auto"}}>
            <input type="text" 
            placehholder="New Task" 
            className="form-control mx-auto col-9" />
            <button type="submit"
            className="form-control mx-auto col-3">Add</button>
        </div>

    )
};

export default TaskInput
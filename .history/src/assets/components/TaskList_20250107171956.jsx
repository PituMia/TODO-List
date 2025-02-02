import React from "react";
import Task from "./Task";

const TaskList = ({tasks}) => {
    return (
        <div className="d-flex flex-column justify-content-center my-3" style={{ width: "100%", margin: "0 auto" }}>
        {tasks.map((task, index) => (
            <Task key={index} todo={task} />
          ))}
          </div>
    )

}

export default TaskList



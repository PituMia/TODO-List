import React from "react";
import Task from "./Task";

const TaskList = ({tasks}) => {
    return (
        <div className="flex-column justify-content-center" style={{ width: "100%", margin: "500px auto" }}>
        {tasks.map((task, index) => (
            <Task key={index} todo={task} />
          ))}
          </div>
    )

}

export default TaskList



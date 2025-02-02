import React from "react";
import Task from "./Task";

const TaskList = ({todo}) => {
    return (
        <div>
        {tasks.map((task, index) => (
            <Task key={index} todo={task} />
          ))}
          </div>
    )

}

export default taskList



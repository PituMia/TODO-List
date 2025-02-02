import React from "react";
import Task from "./Task";

const TaskList = ({todo}) => {
    return (
        {tasks.map((task, index) => (
            <Task key={index} todo={task} />
          ))}
    )

}

export default taskList



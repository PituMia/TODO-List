import React, {useState} from "react";
import Task from "./Task";

const TaskList = () => {
    const[task,  setTask] = useState([]);

    const handleAddTask = (newTask) => {
        setTask
    }
    return (
        <div className="flex-column justify-content-center" style={{ width: "100%", margin: "50px auto" }}>
            {tasks.map((task, index) => (
                <Task key={index} todo={task} />
            ))}
            {console.log(tasks)}
        </div>
    )

}

export default TaskList



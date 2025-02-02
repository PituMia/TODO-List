import React, {useState} from "react";
import Task from "./Task";
import TaskInput from "./TaskInput";

const TaskList = () => {
    const[task,  setTask] = useState([]);

    const handleAddTask = (newTask) => {
        setTask((prevTask) => [...prevTask,newTask])
    }
    return (
        <div className="flex-column justify-content-center" style={{ width: "100%", margin: "50px auto" }}>
            <TaskInput addTask={handleAddTask} />
            {task.map((task, index) => (
                <Task key={index} todo={task} />
            ))}
            {console.log(tasks)}
        </div>
    )

}

export default TaskList



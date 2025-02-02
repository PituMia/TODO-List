import React, { useState } from "react";
import Task from "./Task";
import TaskInput from "./TaskInput";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const handleDeleteTask = (taskToDelete) => {
        setTasks((prevTask) => prevTask.filter((_, index) => index != taskToDelete))
    }

    const handleAddTask = (newTask) => {
        setTasks((prevTask) => [...prevTask,
        {
            task: newTask,
            completed: false,
        }
        ])

        


    }
    return (
        <div className="flex-column justify-content-center" style={{ width: "100%", margin: "50px auto" }}>
            <TaskInput addTask={handleAddTask} />
            {tasks.map((task, index) => (
                <Task key={index} 
                      todo={task} 
                      index={index} 
                      handleDeteleTask={handleDeleteTask}  />       
           ))}

        </div>
    )
console.log(tasks)
}

export default TaskList



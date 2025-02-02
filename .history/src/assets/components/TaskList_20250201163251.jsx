import React, { useState } from "react";
import Task from "./Task";
import TaskInput from "./TaskInput";
import DeleteAllButton from "./DeleteAllButton";
import DeleteCompleteButton from "./DeleteCompleteButton";


const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const handleSwitchBtn = (taskIndex) => {
        setTasks((prevTasks) => 
           prevTasks.map((task, index) =>
             index === taskIndex ? {...task, completed : !task.completed } : task))


    }

    const deleteCompleted = () => {
        setTasks((prevTasks) => 
        prevTasks.filter((task) => !task.completed ))
    }

    const handleDeleteTask = (taskToDelete) => {
        setTasks((prevTask) => prevTask.filter((_, index) => index != taskToDelete))
    }

    const deleteAllTasks = () => {
        setTasks([])
    }

    const handleAddTask = (newTask) => {
        setTasks((prevTask) => [...prevTask,
        {
            task: newTask,
            completed: false,
        }
        ])

        


    }

    console.log(tasks)

    return (
        <div className="tasklist flex-column justify-content-center" style={{ width: "100%", margin: "50px auto" }}>
            <TaskInput addTask={handleAddTask} />
            {tasks.map((task, index) => (
                <Task key={index}
                      todo={task} 
                      index={index} 
                      handleDeleteTask={handleDeleteTask}
                      handleSwitchBtn={handleSwitchBtn}  />       
           ))}
           <div className="buttons">
            <DeleteAllButton deleteAllTasks={deleteAllTasks} />
            <DeleteCompleteButton deleteCompleted={deleteCompleted} /> 
            </div>

        </div>
    )

}

export default TaskList



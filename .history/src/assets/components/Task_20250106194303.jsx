import React from "react";
import TaskInput from "./TaskInput";
import ThrashIcon from "../img/thrash.svg";

const Task = () => {
    return (
        <div>
            <span></span>
            <h1>Task</h1>
            <img src={ThrashIcon} alt="Thrash can" />
        </div>
    )
};

export default Task
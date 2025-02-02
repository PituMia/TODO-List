import React from "react";
import TaskInput from "./TaskInput";
import ThrashIcon from "../img/thrash.svg";
import CheckIcon from "../img/check.svg";

const Task = () => {
    return (
        <div>
            <img src={CheckIcon} alt="Check Icon" />
            <h1>Task</h1>
            <img src={ThrashIcon} alt="Thrash can" />
        </div>
    )
};

export default Task
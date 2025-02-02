import React from "react";
import TaskInput from "./TaskInput";
import ThrashIcon from "../img/thrash.svg";
import CheckIcon from "../img/check.svg";
import "../css/Task.css";

const Task = () => {
    return (
        <div className="task d-flex justify-content-center " >
            <div className="col-10 text-start">
                <h1>asadasdads</h1>
            </div>
            <div className="col-1 h-5 w-5 align-items-center">
                <img src={CheckIcon} alt="Check Icon" />
            </div>
            
            <div className="col-1 h-5 w-5 align-items-center">
                <img src={ThrashIcon} alt="Thrash can" />
            </div>
        </div>
    )
};

export default Task
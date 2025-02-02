import React from "react";
import TaskInput from "./TaskInput";
import ThrashIcon from "../img/thrash.svg";
import CheckIcon from "../img/check.svg";
import "../css/Task.css";

const newTask = ({todo}) => {
    return (
        <div className="task d-flex justify-content-center" >
            <div className=" col-10 text-start pl-4">
                <h1>{todo}</h1>
            </div>
            <div className="col-1 d-flex justify-content-center align-items-center">
                <img src={CheckIcon} alt="Check Icon" className="img" />
            </div>
            
            <div className="col-1 d-flex justify-content-center align-items-center">
                <img src={ThrashIcon} alt="Thrash can" className="img" />
            </div>
        </div>
    )
};

export default newTask
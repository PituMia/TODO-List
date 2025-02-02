import React from "react";
import TaskInput from "./TaskInput";
import ThrashIcon from "../img/thrash.svg";
import CheckIcon from "../img/check.svg";

const Task = () => {
    return (
        <div className="d-flex justify-content-center " style={{ width: "50%", margin: "0 auto" }}>
            <div className="">
                <img src={CheckIcon} alt="Check Icon" />
            </div>
            <div>
                <h1>asadasdads</h1>
            </div>
            <div>
                <img src={ThrashIcon} alt="Thrash can" />
            </div>
        </div>
    )
};

export default Task
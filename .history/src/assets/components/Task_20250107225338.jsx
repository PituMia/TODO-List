import React from "react";
import ThrashIcon from "../img/thrash.svg";
import CheckIcon from "../img/check.svg";
import "../css/Task.css";

const NewTask = ({ todo }) => {
    return (
        <div className="task container d-flex justify-content-between align-items-center p-3" >
            <div className="col-10 text-truncate d-flex align-items-center">
                <h1>{todo}</h1>
            </div>
            <div className="butt col-1">
                <button className="btn" onClick={() => console.log('Task completed')}>

                    <img src={CheckIcon} alt="Check Icon" className="img" />

                </button>
            </div>
            <div className="butt col-1" >
                <button className="btn" onClick={() => console.log('Task delete')}>

                    <img src={ThrashIcon} alt="Thrash can" className="img" />

                </button>
            </div>
        </div>
    )
};

export default NewTask
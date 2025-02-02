import React from "react";
import ThrashIcon from "../img/thrash.svg";
import CheckIcon from "../img/check.svg";
import "../css/Task.css";

const NewTask = ({ todo }) => {
    return (
        <div className="task container d-flex align-items-center justify-content-between" >
            <div className=" col-10 text-start">
                <h1>{todo}</h1>
            </div>
            <div>
                <button className="btn" onClick={() => console.log('Task completed')}>

                    <img src={CheckIcon} alt="Check Icon" className="img" />

                </button>
            </div>
            <div >
                <button className="btn" onClick={() => console.log('Task delete')}>

                    <img src={ThrashIcon} alt="Thrash can" className="img" />

                </button>
            </div>
        </div>
    )
};

export default NewTask
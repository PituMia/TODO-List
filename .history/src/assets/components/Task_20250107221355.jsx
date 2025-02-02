import React from "react";
import ThrashIcon from "../img/thrash.svg";
import CheckIcon from "../img/check.svg";
import "../css/Task.css";

const NewTask = ({ todo }) => {
    return (
        <div className="task container d-flex align-items-center " >
            <div className=" col-10 text-start">
                <h1>{todo}</h1>
            </div>
            <div className="col-1">
                <button className="btn" onClick={() => console.log('Task completed')}>

                    <img src={CheckIcon} alt="Check Icon" className="img" />

                </button>
            </div>
            <div className="col-1" >
                <button className="btn" onClick={() => console.log('Task delete')}>

                    <img src={ThrashIcon} alt="Thrash can" className="img" />

                </button>
            </div>
        </div>
    )
};

export default NewTask
import React from "react";
import ThrashIcon from "../img/thrash.svg";
import CheckIcon from "../img/check.svg";
import "../css/Task.css";

const NewTask = ({todo}) => {
    return (
        <div className="task d-flex justify-content-center my-1" >
            <div className=" col-10 text-start ps-3">
                <h1>{todo}</h1>
            </div>
            <button className="btn btn-link p-0" onClick={() => console.log('Task completed')}></button>
            <div className="col-1 d-flex justify-content-center align-items-center">
                <img src={CheckIcon} alt="Check Icon" className="img" />
            </div>
            </button>
            <div className="col-1 d-flex justify-content-center align-items-center">
                <img src={ThrashIcon} alt="Thrash can" className="img" />
            </div>
        </div>
    )
};

export default NewTask
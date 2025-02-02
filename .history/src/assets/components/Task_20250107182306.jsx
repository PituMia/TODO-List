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
            <button className="btn btn-link p-0 col-1 d-flex justify-content-center align-items-center" onClick={() => console.log('Task completed')}>
            <div>
                <img src={CheckIcon} alt="Check Icon" className="img" />
            </div>
            </button>
            <button className="btn btn-link p-0 col-1 d-flex justify-content-center align-items-center" onClick={() => console.log('Task delete')}>
            <div>
                <img src={ThrashIcon} alt="Thrash can" className="img" />
            </div>
            </button>
        </div>
    )
};

export default NewTask
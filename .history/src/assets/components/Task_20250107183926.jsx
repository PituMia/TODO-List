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
            <div>
            <button className="btn btn-link p-0 col-1 d-flex justify-content-center align-items-center h-100" onClick={() => console.log('Task completed')}>
            
                <img src={CheckIcon} alt="Check Icon" className="img h-100" />
            
            </button>
            </div>
            <div>
            <button className="btn btn-link p-0 col-1 d-flex justify-content-center align-items-center h-100" onClick={() => console.log('Task delete')}>
            
                <img src={ThrashIcon} alt="Thrash can" className="img" />
            
            </button>
            </div>
        </div>
    )
};

export default NewTask
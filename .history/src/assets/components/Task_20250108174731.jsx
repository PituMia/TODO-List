import React, {useState} from "react";
import ThrashIcon from "../img/thrash.svg";
import "../css/Task.css";
import CheckIcon from "../img/check.svg";

const NewTask = ({ todo }) => {
    const[checkBtn, setCheckBtn] = useState(false);
    const[thrashBtn, setThrashBtn] = useState(falselse);

    return (
        <div className="task container d-flex justify-content-between align-items-center p-3" >
            <div className="col-10 text-truncate d-flex align-items-center">
                <h1>{todo}</h1>
            </div>
            <div className="butt-check col-1 d-flex justify-content-center align-items-center">
                <button className="btn" onClick={() => console.log('Task check')}>

                    <img src={CheckIcon} alt="Check" className="img" />

                </button>
            </div>
            <div className="butt-thrash col-1 d-flex justify-content-center align-items-center" >
                <button className="btn" onClick={() => console.log('Task delete')}>

                    <img src={ThrashIcon} alt="Thrash can" className="img" />

                </button>
            </div>
        </div>
    )
};

export default NewTask
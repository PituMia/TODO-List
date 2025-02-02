import React, { useState } from "react";
import ThrashIcon from "../img/thrash.svg";
import "../css/Task.css";
import CheckIcon from "../img/check.svg";
import { handlePressed } from "./switchBtn";

const NewTask = ({ todo, index, handleDeleteTask }) => {
    const [checkBtn, setCheckBtn] = useState(false);
    

    const {task,completed,} = todo;




    return (
        !thrashBtn ? (
            <div className="task container d-flex justify-content-between align-items-center p-3" >
                <div className="text col-10 text-truncate d-flex align-items-center">
                    <h1
                    style={{
                        textDecoration: checkBtn ? 'line-through' : 'none',
                        textDecorationColor: checkBtn ? 'rgba(0, 255, 0, 0.6)' : 'transparent', 
                        textDecorationThickness: checkBtn ? '4px' : '0'  
                    }}>
                        {task}</h1>
                </div>
                <div className="butt-check col-1 d-flex justify-content-center align-items-center">
                    <button className="btn"
                        onClick={() => {
                            handlePressed(checkBtn, setCheckBtn);
                            console.log('Task check');

                        }}>

                        <img src={CheckIcon} alt="Check" className="img" />

                    </button>
                </div>
                <div className="butt-thrash col-1 d-flex justify-content-center align-items-center" >
                    <button className="btn"
                        onClick={() => {
                            handleDeleteTask(index)
                        }}>

                        <img src={ThrashIcon} alt="Thrash can" className="img" />

                    </button>
                </div>
            </div>) : null
    )
};

export default NewTask
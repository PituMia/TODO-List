import React, { useState } from "react";
import ThrashIcon from "../img/thrash.svg";
import "../css/Task.css";
import CheckIcon from "../img/check.svg";


const NewTask = ({ todo, index, handleDeleteTask, handleSwitchBtn }) => {
    


    const { task, completed, } = todo;




    return (
        (
            <div className="task container d-flex justify-content-between align-items-center p-3" >
                <div className="text col-10 text-truncate d-flex align-items-center">
                <h1 style={{ 
                    textDecoration: completed ? 'line-through' : 'none', 
                    textDecorationColor: completed ? 'red' : 'transparent' 
                }}>
                    {task}
                </h1>
                        
                </div>
                <div className="butt-check col-1 d-flex justify-content-center align-items-center">
                    <button className="btn"
                        onClick={() => {
                            handleSwitchBtn(index);
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
            </div>)
    )
};

export default NewTask
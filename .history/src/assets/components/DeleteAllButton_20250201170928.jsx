import React from "react";
import "../css/buttons.css";

const DeleteAllButton = ({ deleteAllTasks }) => {


    return (
        <div>
            <button  className="btn btn-danger d-flex m-auto" 
                     onClick={deleteAllTasks}>
                Delete All Tasks

            </button>
        </div>
    )


}

export default DeleteAllButton
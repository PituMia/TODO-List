import React from "react";
import "../css/buttons.css";

const DeleteCompleteButton = ({ deleteCompleted }) => {


    return (
        <div>
            <button  className="btn btn-success d-flex m-auto" 
                     onClick={deleteCompleted}>
                Delete Completed

            </button>
        </div>
    )


}

export default DeleteCompleteButton
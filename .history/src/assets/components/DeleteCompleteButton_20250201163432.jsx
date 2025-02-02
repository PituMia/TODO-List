import React from "react";

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
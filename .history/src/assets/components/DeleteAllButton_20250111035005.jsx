import React from "react";

const DeleteAllButton = ({ deleteAllTasks }) => {


    return (
        <div>
            <button  className="btn btn-danger" 
                     onClick={deleteAllTasks}>
                Delete All Tasks

            </button>
        </div>
    )


}

export default DeleteAllButton
import React from "react";

const DeleteAllButton = ({ deleteAllTasks }) => {


    return (
        <div>
            <button  className="btn btn-danger f-flex m-auto" 
                     onClick={deleteAllTasks}>
                Delete All Tasks

            </button>
        </div>
    )


}

export default DeleteAllButton
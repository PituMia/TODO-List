import React from "react";

const DeleteAllButton = ({deleteAllTasks}) => {
    
    console.log("al menos es funcion")
    return (
        <div>
            <button onClick={() => {deleteAllTasks}}>
                Delete All Tasks

            </button>
        </div>
    )


}

export default DeleteAllButton
import React from "react";

const DeleteAllButton = ({deleteAllTasks}) => {
    
    
    return (
        <div>
            <button onClick={deleteAllTasks}>
                Delete All Tasks

            </button>
        </div>
    )


}

export default DeleteAllButton
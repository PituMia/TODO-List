import React from "react";

const DeleteAllButton = (setTasks) => {
    const deleteAll = () => {
        setTasks([])
    }

    return (
        <div>
            <button onClick={() => {deleteAll}}>
                Delete All Tasks

            </button>
        </div>
    )


}

export default DeleteAllButton
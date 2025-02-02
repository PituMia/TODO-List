import React from "react";

const DeleteAllButton = (tasks, setTasks) => {
    const deleteAll = () => {
        setTasks([])
    }

    return (
        <div>
            <button onClick={deleteAll}>
                Delete All Tasks

            </button>
        </div>
    )


}

export default DeleteAllButton
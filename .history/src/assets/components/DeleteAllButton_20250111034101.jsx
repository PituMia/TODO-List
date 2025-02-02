import React from "react";

const DeleteAllButton = ({setTasks}) => {
    const deleteAll = () => {
        setTasks([])
    }
    console.log("al menos es funcion")
    return (
        <div>
            <button onClick={() => {deleteAll}}>
                Delete All Tasks

            </button>
        </div>
    )


}

export default DeleteAllButton
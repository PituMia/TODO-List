import React from "react";

const ClearCompletedButton = ({ task, setTask }) => {
    const handleClearCompleted = () => {
        // Filtrar las tareas que no están marcadas como completadas (checkBtn === true)
        const tasksToKeep = task.filter(t => !t.checkBtn);
        setTask(tasksToKeep); 
    };

    return (
        <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-danger" onClick={handleClearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default ClearCompletedButton;
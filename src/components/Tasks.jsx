import React from 'react';
import Task from './Task';

//mapear as tasks e p cada uma renderizar um componente
const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion = {handleTaskDeletion}/>
            ))}
        </>
    );
}

export default Tasks;
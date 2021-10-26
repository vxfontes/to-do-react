import React from 'react';
import Task from './Task';

//mapear as tasks e p cada uma renderizar um componente
const Tasks = ({ tasks, handleTaskClick }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} handleTaskClick={handleTaskClick} />
            ))}
        </>
    );
}

export default Tasks;
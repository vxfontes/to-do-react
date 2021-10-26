import React from 'react';
import Task from './Task';

//mapear as tasks e p cada uma renderizar um componente
const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} />
            ))}
        </>
    );
}

export default Tasks;
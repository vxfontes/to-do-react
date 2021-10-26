import React, { useState } from "react";
import './App.css';
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      //esta em um loop, onde ele verifica se os ids são iguals
      // caso não seja, retorna a task normalmente
      // caso sejam iguais, retorna a task com o inverso do completed anterior
      // caso esteja false, fica true
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTask);
  }


  return (
    <>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        //handleTaskDeletion={handleTaskDeletion}
      />
    </>
  );
}

export default App;

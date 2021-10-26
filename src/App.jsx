import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// mapeamento de páginas
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import './App.css';

const App = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchTasks = async () => {
			const { data } = await axios.get(
				"https://jsonplaceholder.cypress.io/todos?_limit=10"
			);

			setTasks(data);
		};

		fetchTasks();
	}, []);

	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
      //esta em um loop, onde ele verifica se os ids são iguals
      // caso não seja, retorna a task normalmente
      // caso sejam iguais, retorna a task com o inverso do completed anterior
      // caso esteja false, fica true
			if (task.id === taskId) return { ...task, completed: !task.completed };

			return task;
		});

		setTasks(newTasks);
	};

	const handleTaskAddition = (taskTitle) => {
		const newTasks = [
			...tasks,
			{
				title: taskTitle,
				id: uuidv4(),
				completed: false,
			},
		];

		setTasks(newTasks);
	};

	const handleTaskDeletion = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);

		setTasks(newTasks);
	};

	return (
		<Router>
			<div className="container">
				<Header />
				<Route
					path="/"
					exact
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskDeletion={handleTaskDeletion}
							/>
						</>
					)}
				/>
				<Route path="/:taskTitle" exact component={TaskDetails} />
			</div>
		</Router>
	);
};

export default App;
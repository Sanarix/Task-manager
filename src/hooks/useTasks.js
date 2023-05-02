import { useState} from "react";

export default function useTasks() {
	const [newTasks, setNewTasks] = useState([]);
	const [progressTasks, setProgressTasks] = useState([]);
	const [finishedTasks, setFinishedTasks] = useState([]);

	return {
		newTasks,
		setNewTasks,
		progressTasks,
		setProgressTasks,
		finishedTasks,
		setFinishedTasks
	}
}
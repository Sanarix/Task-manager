import { useState } from "react";

export default function useNewTasks() {
	const [newTasks, setNewTasks] = useState([]);

	return [newTasks, setNewTasks];
}
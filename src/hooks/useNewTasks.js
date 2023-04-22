import { useState } from "react";

export default function useNewTasks() {
	const [tasks, setTasks] = useState([]);

	return [tasks, setTasks];
}
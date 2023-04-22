import { useState } from "react";

export default function useFinishedTasks() {
	const [finishedTasks, setFinishedTasks] = useState([]);

	return [finishedTasks, setFinishedTasks]
}
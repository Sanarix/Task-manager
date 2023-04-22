import { useState } from "react";

export default function useProgressTasks() {
	const [progressTask, setProgressTask] = useState([]);

	return [progressTask, setProgressTask];
}
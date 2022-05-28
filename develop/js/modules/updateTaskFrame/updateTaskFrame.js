import { updateTask } from "./updateTask";

export function updateTaskFrame(frame, currentTask, db, uid) {
	const tasks = frame.children;

	if(tasks.length == '1') {
		updateTask(currentTask);
		console.log('тут одна задача');
	}

	if(tasks.length > 1) {
		updateTask(currentTask);
		console.log('тут больше одной задачи');
	}
}
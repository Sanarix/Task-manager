import { updateTask } from "./updateTask";
import { getPosition } from "../../functions/frame/getPosition";

export function updateTaskFrame(frame, currentTask, db, uid, key) {
	const tasks = frame.children;

	if(tasks.length == 1) {
		const result = updateTask(frame, currentTask, 1, db, uid, key);
	}

	if(tasks.length > 1) {
		// const result = updateTask(frame, currentTask, db, uid, key);
		// console.log(result);
		console.log('тут больше одной задачи');
	}
	return pos
}
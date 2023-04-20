import { updateTask } from "./updateTask";

export function updateTaskFrame(frame, currentTask, db, uid, key) {
	const result = updateTask(frame, currentTask, db, uid, key);
	return result
}
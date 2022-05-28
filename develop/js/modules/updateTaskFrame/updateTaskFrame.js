import { checkTasks } from "./checkTasks";
import { updateTask } from "./updateTask";

export function updateTaskFrame(frame, currentTask, db, uid) {
	const tasks = frame.children;

	if(tasks.length == 1) {
		console.log('тут один таск');
		updateTask(currentTask);
		return
	}

	if(tasks.length > 1) {
		const [img, lotOfTasks] = checkTasks(tasks);

		if(!img && !lotOfTasks) {
			console.log('тут картинка и таск')
			updateTask(currentTask);
			return
		}

		if(!img && lotOfTasks) {
			console.log('тут много тасков');
			updateTask(currentTask);
			return
		}
	}
}
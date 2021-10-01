import { newTaskFrame } from "./newTaskFrame";
import { progressTaskFrame } from "./progressTaskFrame";
import { finishTaskFrame } from "./finishTaskFrame";

export function showTasksFrames() {
	const tasksContainer = document.querySelector('.tasks-container');
	newTaskFrame(tasksContainer);
	progressTaskFrame(tasksContainer);
	finishTaskFrame(tasksContainer);
}
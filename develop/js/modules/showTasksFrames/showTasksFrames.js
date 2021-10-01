import { taskFrame } from "./taskFrame";

export function showTasksFrames() {
	const tasksContainer = document.querySelector('.tasks-container');
	
	const newTaskframe = new taskFrame(
		tasksContainer,
		'new-task-frame task-frame'
		);

	const progressTaskFrame = new taskFrame(
		tasksContainer,
		'progress-task-frame task-frame'
		);

	const finishTaskFrame = new taskFrame(
		tasksContainer,
		'finish-task-frame task-frame'
		);

	newTaskframe.render();
	progressTaskFrame.render();
	finishTaskFrame.render();
}
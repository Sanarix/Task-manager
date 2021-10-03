import { taskFrame } from "./taskFrame";

export function showTasksFrames() {
	const container = document.querySelector('.main');
	
	const newTaskframe = new taskFrame(
		container,
		'new-task-frame task-frame'
		);

	const progressTaskFrame = new taskFrame(
		container,
		'progress-task-frame task-frame'
		);

	const finishTaskFrame = new taskFrame(
		container,
		'finish-task-frame task-frame'
		);

	newTaskframe.render();
	progressTaskFrame.render();
	finishTaskFrame.render();
}
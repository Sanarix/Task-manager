import { taskFrame } from "./taskFrame.js";
import { openModalNewTask } from "../modal/logic/openModalNewTask.js";

export function showTasksFrames() {
	const container = document.querySelector('.main');
	container.innerHTML = '';
	
	const newTaskframe = new taskFrame(
		container,
		'new-task-frame task-frame',
		'task-header new-task',
		'New Task',
		'./img/add-crist-in-circle.svg',
		);

	const progressTaskFrame = new taskFrame(
		container,
		'progress-task-frame task-frame',
		'task-header task-in-progress',
		'In progress',
		);

	const finishTaskFrame = new taskFrame(
		container,
		'finish-task-frame task-frame',
		'task-header finished-task',
		'Finished',
		);

	newTaskframe.render();
	progressTaskFrame.render();
	finishTaskFrame.render();
}
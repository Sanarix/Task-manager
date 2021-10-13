import { taskFrame } from "./taskFrame";
import { openModalNewTask } from "../popUp/logic/openModalNewTask";

export function showTasksFrames() {
	const container = document.querySelector('.main');
	
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
	openModalNewTask();
}
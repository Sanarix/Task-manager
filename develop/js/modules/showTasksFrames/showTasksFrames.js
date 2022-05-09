import { taskFrame } from "./taskFrame.js";
import { openModalNewTask } from "../modal/logic/openModalNewTask.js";

export function showTasksFrames(db, userUid, unregistered) {
	const container = document.querySelector('.main');
	container.innerHTML = '';
	
	const newTaskframe = new taskFrame(
		container,
		'new-task-frame task-frame droppable',
		'task-header new-task',
		'New Task',
		'./img/add-crist-in-circle.svg',
		);

	const progressTaskFrame = new taskFrame(
		container,
		'progress-task-frame task-frame droppable',
		'task-header task-in-progress',
		'In progress',
		);

	const finishTaskFrame = new taskFrame(
		container,
		'finish-task-frame task-frame droppable',
		'task-header finished-task',
		'Finished',
		);

	newTaskframe.render();
	progressTaskFrame.render();
	finishTaskFrame.render();
	openModalNewTask(db, userUid);
}
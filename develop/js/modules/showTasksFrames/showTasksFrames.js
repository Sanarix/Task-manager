import { taskFrame } from "./taskFrame.js";
import { openModalNewTask } from "../modal/logic/openModalNewTask.js";

export function showTasksFrames(db, userUid) {
	const container = document.querySelector('.main');
	container.innerHTML = '';
	
	const newTaskFrame = new taskFrame(
		container,
		'new-task-frame task-frame droppable',
		'task-header new-task',
		'New Task',
		true,
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

	newTaskFrame.render();
	progressTaskFrame.render();
	finishTaskFrame.render();
	openModalNewTask(db, userUid);
}
import { taskNode } from "./taskNode";
import { closeModal } from "../../modules/modal/logic/closeModal";
import { ref, push } from "@firebase/database";
import { pushTaskDB } from "./pushTaskDB";
import { updateTaskFrame } from "../../modules/updateTaskFrame/updateTaskFrame";

export function addTask({db, uid, taskFrame}) {
	const addTaskButton = document.querySelector('.btn-submit');
	const resetButton = document.querySelector('.btn-reset');
	const deleteButton = document.querySelector('.btn-delete');
	const currentTaskFrame = document.querySelector(`.${taskFrame || 'new-task-frame'}`);

	deleteButton.classList.add('hidden');

	addTaskButton.addEventListener('click', event => {
		event.preventDefault();
		const taskHeaderField = document.querySelector('.title');
		const taskHeader = document.querySelector('.title').textContent.trim();
		const taskText = document.querySelector('.task-text').value;
		const dbKeyPosition = ref(db, `users/${uid}/tasks/${taskFrame || 'new-task-frame'}`);
		const newTaskKey = push(dbKeyPosition).key;
		const task = taskNode(newTaskKey, {taskHeader, taskText});
		const date = new Date().getTime();

		if(!taskHeader && !taskText) {
			borderHighlighting(taskHeaderField);
			return
		}

		currentTaskFrame.prepend(task);
		closeModal(true);

		pushTaskDB(db, uid, taskHeader, taskText, newTaskKey, taskFrame, date);

		deleteButton.classList.remove('hidden');
	})

	resetButton.addEventListener('click', (event) => {
		event.preventDefault();
		document.querySelector('.task-text').value = '';
	})

	function borderHighlighting (element) {
		element.style.border = '3px solid red';
		setTimeout(()=>(element.style.border = '2px solid black'), 1500)
	}
}
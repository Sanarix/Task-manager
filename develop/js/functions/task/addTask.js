import { taskNode } from "./taskNode";
import { closeModal } from "../../modules/modal/logic/closeModal";
import { ref, push, set } from "@firebase/database";

export function addTask({db, uid}) {
	const addTaskButton = document.querySelector('.btn-submit');
	const resetButton = document.querySelector('.btn-reset');
	const deleteButton = document.querySelector('.btn-delete');
	const newTaskFrame = document.querySelector('.new-task-frame');

	deleteButton.classList.add('hidden');

	addTaskButton.addEventListener('click', event => {
		event.preventDefault();
		const taskHeader = document.querySelector('.title').textContent.trim();
		const taskText = document.querySelector('.task-text').textContent;
		const dbKeyPosition = ref(db, `users/${uid}/tasks/new-task-frame`);
		const newTaskKey = push(dbKeyPosition).key;
		const task = taskNode(newTaskKey, {taskHeader, taskText});

		if(!taskHeader && !taskText) {
			console.log('Для создания задачи нужен заголовок');
		}

		newTaskFrame.prepend(task);
		closeModal(true);

		// Push in db
		const taskData = {
					"taskHeader": taskHeader,
					"taskText": taskText
			}
			set(ref(db, `users/${uid}/tasks/new-task-frame/${newTaskKey}`), taskData);

			deleteButton.classList.remove('hidden');
	})

	resetButton.addEventListener('click', (event) => {
		event.preventDefault();
		const taskText = document.querySelector('.task-text').textContent = '';
	})
}
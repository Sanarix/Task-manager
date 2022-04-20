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
		const taskHeaderField = document.querySelector('.title');
		const taskHeader = document.querySelector('.title').textContent.trim();
		const taskText = document.querySelector('.task-text').textContent;
		const dbKeyPosition = ref(db, `users/${uid}/tasks/new-task-frame`);
		const newTaskKey = push(dbKeyPosition).key;
		const task = taskNode(newTaskKey, {taskHeader, taskText});

		if(!taskHeader && !taskText) {
			function borderHighlighting () {
				taskHeaderField.style.border = '3px solid red';
				setTimeout(()=>(taskHeaderField.style.border = '2px solid black'), 1500)
			}
			borderHighlighting();
			return
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
		document.querySelector('.task-text').textContent = '';
	})
}
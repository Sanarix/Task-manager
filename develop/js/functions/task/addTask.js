import { taskNode } from "./taskNode";
import { closeModal } from "../../modules/modal/logic/closeModal";
import { ref, push, set } from "@firebase/database";

export function addTask({db, uid}) {
	const addTaskButton = document.querySelector('.btn-ok');
	const newTaskFrame = document.querySelector('.new-task-frame');

	addTaskButton.addEventListener('click', event => {
		event.preventDefault();
		const taskHeader = document.querySelector('.title').textContent.trim();
		const taskText = document.querySelector('.task-text').textContent;
		const dbKeyPosition = ref(db, `users/${uid}/tasks/new-task-frame`);
		const newTaskKey = push(dbKeyPosition).key;
		const task = taskNode(newTaskKey, {taskHeader, taskText});
		
		const text = document.querySelector('.task-text');
		console.log(text);

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
	})
}
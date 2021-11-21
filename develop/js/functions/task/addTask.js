import { taskNode } from "./taskNode";
import { closeModal } from "../../modules/modal/logic/closeModal";
import { ref, push, set } from "@firebase/database";

export function addTask(database) {
	const addTaskButton = document.querySelector('.btn-ok');
	const newTaskFrame = document.querySelector('.new-task-frame');

	addTaskButton.addEventListener('click', event => {
		event.preventDefault();
		const taskHeader = document.querySelector('.title').textContent.trim();
		const taskText = document.querySelector('.task-text').textContent.trim();
		const dbKeyPosition = ref(database, 'tasks');
		const newTaskKey = push(dbKeyPosition).key;
		const task = taskNode(newTaskKey, {taskHeader, taskText});

		if(!taskHeader && !taskText) {
			console.log('Для создания задачи нужен заголовок');
		}

		newTaskFrame.prepend(task);
		closeModal(true);

		// Push in db
		const uid = Date.now();
		const taskData = {
					"taskHeader": taskHeader,
					"taskText": taskText,
					"userName": "",
					uid
			}
			
			set(ref(database, `tasks/${newTaskKey}`), taskData);
	})
}
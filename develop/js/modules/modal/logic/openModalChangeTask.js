import { openModal } from "./openModal";
import { newTask } from "../newTask";
import { closeModal } from "./closeModal";
import { set, ref, remove } from "firebase/database";

export function openModalChangeTask(element, db, uid) {
	const elementID = element.dataset.id;
	const parentElement = element.parentElement.classList[0];
	const cardHeader = element.querySelector('.task-card_header').textContent.trim();
	const cardText = element.querySelector('.task-card_text').textContent;

	function updateTask() {
			const task = document.querySelector('.newTask');
			const header = task.querySelector('.title').textContent.trim();
			const text = task.querySelector('.task-text').textContent;
			set(ref(db, `users/${uid}/tasks/${parentElement}/${elementID}`), {
				"taskHeader": header,
				"taskText": text
			})
			closeModal(true);
}

	function deleteTask() {
			const tasks = document.querySelectorAll('.task-card');
			for (const task of tasks) {
				if(task.dataset.id === elementID) {
					task.remove();
				}
			}
			remove(ref(db, `users/${uid}/tasks/${parentElement}/${elementID}`));
			closeModal(true);
	}

	openModal(null, newTask(cardHeader ,cardText));

	const buttonOk = document.querySelector('.btn-ok');
	const buttonNok = document.querySelector('.btn-nok');
	buttonOk.addEventListener('click', updateTask);
	buttonNok.addEventListener('click', deleteTask);
}
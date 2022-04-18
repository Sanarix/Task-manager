import { openModal } from "./openModal";
import { newTask } from "../newTask";
import { updateTask } from "../../../functions/task/updateTask";
import { deleteTask } from "../../../functions/task/deleteTask";

export function openModalChangeTask(element, db, uid) {
	const elementID = element.dataset.id;
	const parentElement = element.parentElement.classList[0];
	const cardHeader = element.querySelector('.task-card_header').
	textContent.
	trim();
	const cardText = element.querySelector('.task-card_text')? element.querySelector('.task-card_text').innerHTML.trim() :
	'';
	
	openModal(null, newTask(cardHeader ,cardText));

	const buttonSubmit = document.querySelector('.btn-submit');
	const buttonDelete = document.querySelector('.btn-delete');
	const buttonReset = document.querySelector('.btn-reset');
	buttonSubmit.addEventListener('click', () => {updateTask(parentElement, elementID, db, uid)});
	buttonDelete.addEventListener('click', () => deleteTask(parentElement, elementID, db, uid));
	buttonReset.addEventListener('click', () => {
		const taskText = document.querySelector('.task-text').textContent = '';
	})
}
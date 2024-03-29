import { openModal } from "./openModal";
import { newTask } from "../newTask";
import { editTask } from "../../../functions/task/editTask";
import { deleteTask } from "../../../functions/task/deleteTask";

export function openModalEditTask(element, db, uid) {
	const elementID = element.dataset.id;
	const elementTime = element.dataset.time;
	const parentElement = element.parentElement.classList[0];
	const cardHeader = element.querySelector('.task-card_header').
	textContent.
	trim();
	const cardText = element.querySelector('.task-card_text')? element.querySelector('.task-card_text').innerHTML.trim() :
	'';
	
	openModal(null, newTask(cardHeader ,cardText, 'Update task'));

	const buttonSubmit = document.querySelector('.btn-submit');
	const buttonDelete = document.querySelector('.btn-delete');
	const buttonReset = document.querySelector('.btn-reset');
	buttonSubmit.addEventListener('click', () => {editTask(parentElement, elementID, elementTime, db, uid)});
	buttonDelete.addEventListener('click', () => deleteTask(parentElement, elementID, db, uid));
	buttonReset.addEventListener('click', () => {
		document.querySelector('.task-text').value = '';
	})
}
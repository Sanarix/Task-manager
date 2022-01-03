import { openModal } from "./openModal";
import { newTask } from "../newTask";
import { updateTask } from "../../../functions/task/updateTAsk";
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

	const buttonOk = document.querySelector('.btn-ok');
	const buttonNok = document.querySelector('.btn-nok');
	buttonOk.addEventListener('click', () => {updateTask(parentElement, elementID, db, uid)});
	buttonNok.addEventListener('click', () => deleteTask(parentElement, elementID, db, uid));
}
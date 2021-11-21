import { openModal } from "./openModal";
import { newTask } from "../newTask";

export function openModalChangeTask(element) {
	const elementID = element.dataset.id;
	const cardHeader = element.querySelector('.task-card_header').textContent.trim();
	const cardText = element.querySelector('.task-card_text').textContent.trim();

	openModal(null, newTask(cardHeader ,cardText))
}
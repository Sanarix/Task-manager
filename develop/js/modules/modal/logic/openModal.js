import { settingsHandler } from "../../settings/settingsHandler";
import { closeModal } from "./closeModal";

export function openModal(element, content, handler) {
	const overlay = document.querySelector('.overlay');
	const modalContent = document.querySelector('.modal-content');
	
	element.addEventListener('click', () => {
		overlay.classList.add('visible');

		modalContent.innerHTML = '';
		modalContent.innerHTML = content;

		handler();
	});

	closeModal();
}
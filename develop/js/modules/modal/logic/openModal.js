import { closeModal } from "./closeModal.js";

export function openModal(element, content, handler, handlerParam) {
	const overlay = document.querySelector('.overlay');
	const modalContent = document.querySelector('.modal-content');

	function showModal() {
		overlay.classList.add('visible');
	
		modalContent.innerHTML = '';
		modalContent.innerHTML = content;

		if(handler) {
			handler(handlerParam);
		}
	}

	if(element) {
		element.addEventListener('click', showModal);
	}else{
		showModal();
	}
	
	closeModal();
}
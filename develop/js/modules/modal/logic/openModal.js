import { closeModal } from "./closeModal";

export function openModal(element, content, handler) {
	const overlay = document.querySelector('.overlay');
	const modalContent = document.querySelector('.modal-content');

	function showModal() {
		overlay.classList.add('visible');
	
		modalContent.innerHTML = '';
		modalContent.innerHTML = content;

		if(handler) {
			handler();
		}
	}

	if(element) {
		element.addEventListener('click', showModal);
	}else{
		showModal();
	}
	
	closeModal();
}
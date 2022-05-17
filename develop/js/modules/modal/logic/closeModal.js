export function closeModal(close) {
	const modal = document.querySelector('.overlay');
	const modalError = document.querySelector('.modal-error');
	const closeButton = document.querySelector('.close-button');

	if(close) {
		modal.classList.remove('visible');
	}

	modal.addEventListener('click', (event) => handler(event))

	function handler(event) {
		if(event.target == closeButton || event.target.parentElement == closeButton) {
			modal.classList.remove('visible');
		}else {
			return
		}
	}
	modal.removeEventListener('click', (event) => handler(event))
}
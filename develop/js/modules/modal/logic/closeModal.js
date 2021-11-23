export function closeModal(close) {
	const modal = document.querySelector('.overlay');
	const closeButton = document.querySelector('.close-button');

	if(close) {
		modal.classList.remove('visible');
	}

	modal.addEventListener('click', event => {
		if(event.target == closeButton || event.target.parentElement == closeButton) {
			modal.classList.remove('visible');
		}else {
			return
		}
	})
}
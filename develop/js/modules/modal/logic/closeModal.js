export function closeModal() {
	const modal = document.querySelector('.overlay');
	const closeButton = document.querySelector('.close-button');

	modal.addEventListener('click', event => {
		if(event.target.contains(closeButton) || event.target.parentElement == closeButton || event.target == modal) {
			modal.classList.remove('visible');
		}else {
			return
		}
	})
}
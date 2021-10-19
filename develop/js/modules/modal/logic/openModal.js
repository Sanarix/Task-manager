export function openModal(element, content) {
	const overlay = document.querySelector('.overlay');
	const modalContent = document.querySelector('.modal-content');
	
	element.addEventListener('click', () => {
		overlay.classList.add('visible');

		modalContent.innerHTML = '';
		modalContent.innerHTML = content;
	});
	
	
}
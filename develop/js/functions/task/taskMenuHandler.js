export function taskMenuHandler(element) {
	const button = element.querySelector('.task-card_menu');
	button.addEventListener('click', event => {
		event.preventDefault();
		event.stopPropagation();
		console.log(element);
	})
}
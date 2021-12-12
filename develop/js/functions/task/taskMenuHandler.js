export function taskMenuHandler(element) {
	const button = element.querySelector('.task-card_menu');
	const menu = element.querySelector('.menu');
	button.addEventListener('click', event => {
		const x = event.pageX;
		const y = event.pageY;
		document.body.append(menu);
		function move(x ,y) {
			menu.style.left = x - menu.offsetWidth / 2 + 'px';
			menu.style.top = y - menu.offsetHeight / 2 + 'px';
		}
		event.preventDefault();
		event.stopPropagation();
		menu.classList.toggle('visible');
		move(x,y)
		console.log(menu);
	})
}
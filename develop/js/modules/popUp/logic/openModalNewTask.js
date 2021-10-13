export function openModalNewTask() {
	const newTaskFrame = document.querySelector('.new-task-frame');
	const overlay = document.querySelector('.overlay');

	newTaskFrame.addEventListener('click', () => {
		overlay.classList.add('visible');
	})
}
export function getTasksInFrame(selector) {
	const element = document.querySelector(`${selector}`);
	const taskCards = element.querySelectorAll('.task-card');
	return taskCards
}
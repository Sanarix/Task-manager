export function newTaskFrame(container) {
	const newTaskFrame = document.createElement('div');
	newTaskFrame.className = 'new-task-frame task-frame';
	container.append(newTaskFrame);
	return console.log(container);
}
export function showTasksFrames() {
	const tasksContainer = document.querySelector('.tasks-container');
	const newTaskFrame = document.createElement('div');
	newTaskFrame.className = 'newTaskFrame';
	tasksContainer.append(newTaskFrame);
	return console.log(tasksContainer);
}
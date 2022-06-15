export function getPosition(frame, currentTask) {
	const data = frame.children;
	const tasks = [...data].reverse();
	let position;

	if(tasks.length === 0) {
		position = 1;
		return position
	}

	if(frame.classList.contains('empty')){
		position = 1;
		return position
	}

	if(tasks.length >= 1) {
		for(let task of tasks) {
			if(task.dataset.id === currentTask.dataset.id) {
				position += 1;
				return position
			}
			position = +task.dataset.pos;
		}
	}

	return ++position;
}
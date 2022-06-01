export function getPosition(frame, currentTask) {
	const data = frame.children;
	const tasks = [...data].reverse();
	let position;

	if(tasks.length == 1) {
		position = 1;
	}

	if(tasks.length > 1) {
		for(let task of tasks) {
			if(task == currentTask) {
				position++
				return position
			}
			position = +task.dataset.pos;
		}
	}
	return position;
}
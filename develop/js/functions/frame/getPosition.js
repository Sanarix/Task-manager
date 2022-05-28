export function getPosition(frame) {
	const tasks = frame.children;
	let position;

	if(tasks.length == 1) {
		position = 1;
	}

	if(tasks.length > 1) {
		//TODO найти самую большую позицию и прибавить 1
	}
	return position;
}
export function checkTasks(data) {
	let tasks = [...data];
		let img = false;
		let isLotOfTasks = false;
		console.log('-------------')
		console.log(tasks[0])
		console.log(tasks[1])
		console.log('-------------')

		if(tasks[0].classList.contains('task-frame_img')) {
			img = true;
		}
		if(!tasks[0].classList.contains('task-frame_img')) {
			if(tasks[1].classList.contains('task-card')) {
				isLotOfTasks = true
			}
		}
		return [img, isLotOfTasks];
}
export function taskNode(key, {taskHeader, taskText}, taskTime, pos) {
	const task = document.createElement('div');
	task.className = 'task-card';
	task.dataset.id = key;
	task.dataset.time = taskTime;
	task.dataset.pos = pos;
	const taskBody =  `
		<div class = "task-card_head">
			<h3 class="task-card_header">${taskHeader}</h3>
			<button class="task-card_menu">
			<img src="./img/edit.svg">
			</button>
		</div>
	`
	task.innerHTML = taskBody;
	if (taskText) {
		const text = document.createElement('div');
		text.disabled = 'disabled';
		text.className = 'task-card_text';
		text.textContent = taskText;
		task.append(text);
	}
	return task
}
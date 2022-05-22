export function taskNode(key, {taskHeader, taskText}, taskTime) {
	const task = document.createElement('div');
	task.className = 'task-card';
	task.dataset.id = key;
	task.dataset.time = taskTime;
	const taskBody =  `
			<button class="task-card_menu">
				<img src="./img/edit.svg">
			</button>
			<div class = "task-card_head">
			<h3 class="task-card_header">${taskHeader}</h3>
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
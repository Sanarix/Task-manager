export function taskNode(key, {taskHeader, taskText,}) {
	const task = document.createElement('div');
	task.className = 'task-card';
	task.dataset.id = key;
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
		console.log(taskText);
		const text = document.createElement('pre');
		text.className = 'task-card_text';
		text.textContent = taskText;
		task.append(text)
	}
	return task
}
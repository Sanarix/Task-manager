export function taskNode(key, {taskHeader, taskText,}) {
	const task = document.createElement('div');
	task.className = 'task-card';
	const taskBody =  `
		<div data-key="${key}">
		<h3 class="task-card_header">${taskHeader}</h3>
		</div>
		<div class="task-card_text">
		${taskText}
		</div>
	`
	task.innerHTML = taskBody;
	return task
}
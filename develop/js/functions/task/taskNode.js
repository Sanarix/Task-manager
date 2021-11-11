export function taskNode(taskTitle, taskText, dataKey) {
	const task = document.createElement('div');
	task.className = 'task-card';
	const taskBody =  `
		<div data-key="${dataKey}">
		<h3 class="task-card_header">${taskTitle}</h3>
		</div>
		<div class="task-card_text">
		${taskText}
		</div>
	`
	task.innerHTML = taskBody;
	return task
}
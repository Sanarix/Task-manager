export function taskNode(taskTitle, taskText) {
	const task = document.createElement('div');
	task.className = 'task-card';
	const taskBody =  `
		<div>
		<h3 class="task-card_header">${taskTitle}</h3>
		</div>
		<div class="task-card_text">
		${taskText}
		</div>
	`
	task.innerHTML = taskBody;
	return task
}
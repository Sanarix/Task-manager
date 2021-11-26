export function taskNode(key, {taskHeader, taskText,}) {
	const task = document.createElement('div');
	task.className = 'task-card';
	task.dataset.id = key;
	const taskBody =  `
		<h3 class="task-card_header">${taskHeader}</h3>
		<pre class="task-card_text">${taskText}</pre>
	`
	task.innerHTML = taskBody;
	return task
}
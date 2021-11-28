export function taskNode(key, {taskHeader, taskText,}) {
	const task = document.createElement('div');
	task.className = 'task-card';
	task.dataset.id = key;
	const taskBody =  `
		<div class = "task-card_head">
		<h3 class="task-card_header">${taskHeader}</h3>
		<div class="task-card_container"><button class="menu"><img src="./img/menu.svg"></button></div>
		</div>
		<pre class="task-card_text">${taskText}</pre>
	`
	task.innerHTML = taskBody;
	return task
}
export function taskNode(key, {taskHeader, taskText,}) {
	const task = document.createElement('div');
	task.className = 'task-card';
	task.dataset.id = key;
	const taskBody =  `
			<button class="task-card_menu"><img src="./img/menu.svg"></button>
			<ul class="menu">
			<li>Редактировать</li>
			<li>Удалить</li>
			</ul>
			<div class = "task-card_head">
			<h3 class="task-card_header">${taskHeader}</h3>
			</div>
			<pre class="task-card_text">${taskText}</pre>
			`
	task.innerHTML = taskBody;
	return task
}
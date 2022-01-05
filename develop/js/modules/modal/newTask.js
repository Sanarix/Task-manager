export function newTask(taskHeader, taskText) {
	return `
	<div class="newTask">
		<div class="text-area">
			<div class="title" contenteditable data-placeholder="Title">${taskHeader 
			|| ''}</div>
			<pre class="task-text" contenteditable data-placeholder="Task">${taskText || ''}</pre>
		</div>
		<div class="vertical-line">
			<div class="buttons">
				<button class="btn-ok"><img src="./img/submit.svg" alt="submit" class="btn-img" title="Save"></button>
				<button class="btn-nok"><img src="./img/clear.svg" alt="reset" class="btn-img" title="Clear"></button>
			</div>
	</div>
	`
}
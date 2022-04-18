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
				<button class="btn btn-submit"><img src="./img/submit.svg" alt="submit" class="btn-img" title="Save"></button>
				<button class="btn btn-reset"><img src="./img/reset.svg" alt="reset" class="btn-img" title="Clear"></button>
				<button class="btn btn-delete "><img src="./img/delete.svg" alt="delete" class="btn-img" title="Delete"></button>
			</div>
	</div>
	`
}
export function newTask(taskHeader, taskText, cardHeader = '',) {
	return `
	<div class="newTask">
		<h2>${cardHeader}</h2>
		<div class="newTask-body">
			<div class="text-area">
				<div class="title" contenteditable data-placeholder="Title">${taskHeader 
				|| ''}</div>
				<textarea class="task-text" rows="10" placeholder="Task">${taskText || ''}</textarea>
			</div>
			<div class="vertical-line">
				<div class="buttons">
					<button class="btn btn-submit"><img src="./img/submit.svg" alt="submit" class="btn-img" title="Save"></button>
					<button class="btn btn-reset"><img src="./img/reset.svg" alt="reset" class="btn-img" title="Clear"></button>
					<button class="btn btn-delete"><img src="./img/delete.svg" alt="delete" class="btn-img" title="Delete"></button>
				</div>
		</div>
	</div>
	`
}
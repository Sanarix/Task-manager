export function createNewTask() {
	return `
	<div class="newTask">
		<div class="text-area">
			<input type="text" class="title" placeholder="Title">
			<textarea class="task-text" placeholder="Task" autocapitalize="sentences"></textarea>
		</div>
		<div class="vertical-line">
			<div class="buttons">
				<button class="btn-ok"><img src="./img/submit.svg" alt="submit" class="btn-img" title="Save"></button>
				<button class="btn-nok"><img src="./img/clear.svg" alt="reset" class="btn-img" title="Clear"></button>
			</div>
	</div>
	`
}
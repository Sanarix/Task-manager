

export function moveTask(element, db, uid) {
	const taskCard = element;
	const taskCardId = element.dataset.id;

	function readyToMove() {
		const movingTaskCard = taskCard;
		
	}
	
	taskCard.addEventListener('mousedown', (event) => {
		event.stopPropagation();
		event.preventDefault();
		// Далее логика перемещения:
		// копируем задачу, вставляем в body, удаляем задачу из new-task-frame 
		// делаем так чтобы задача перемещалась за мышкой
		// при наведении на другой фрейм и отпускании мыши, добавляем задачу в тот фрейм на которым находится мышь.
	})
}
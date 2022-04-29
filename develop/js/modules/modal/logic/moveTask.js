import { deleteTask } from "../../../functions/task/deleteTask";

export function moveTask(element, db, uid) {
	const taskCard = element;
	const taskCardId = element.dataset.id;
	const main = document.querySelector('main');

	taskCard.addEventListener('mousedown', event => {
		event.preventDefault();
		event.stopPropagation();
		taskCard.classList.add('moving');

		moving(taskCard);
	})

	function moving(movingElement) {
		function move(event) {
			movingElement.style.top = `${event.clientX}px`;
			movingElement.style.left = `${event.clientX}px`;
		}
		document.addEventListener('mousemove', (event) => move(event));
		endingMove(movingElement, move);
	}

	function endingMove(movingElement, move) {
		document.addEventListener('mouseup', event=> {
			event.preventDefault();
			event.stopPropagation();
			movingElement.classList.remove('moving');
			document.removeEventListener('mousemove', (event) => move(event))
			console.log('Зафиксировали элемент в другом фрейме');
		})
	}

	// function readyToMove() {
	// 	const movingTaskCard = taskCard;
	// 	console.log(movingTaskCard);
	// }
	
	// taskCard.addEventListener('mousedown', event => {
	// 	event.stopPropagation();
	// 	event.preventDefault();
	// 	console.log('Начато перемещение');

	// 	// Далее логика перемещения:
	// 	// копируем задачу, вставляем в body, удаляем задачу из new-task-frame 
	// 	// делаем так чтобы задача перемещалась за мышкой
	// 	// при наведении на другой фрейм и отпускании мыши, добавляем задачу в тот фрейм на которым находится мышь.
	// })

	// main.addEventListener('mouseup', event => {
	// 	event.stopPropagation();
	// 	event.preventDefault();
	// 	console.log('Перемещение закончено');
	// })

}
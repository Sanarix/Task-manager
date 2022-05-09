import { deleteTask } from "../../../functions/task/deleteTask";

export function moveTask(element, db, uid) {
	const taskCard = element;
	const taskCardId = element.dataset.id;

	taskCard.onmousedown = function(event) {
		const taskCardStyles = taskCard.getBoundingClientRect();

		taskCard.style.position = 'absolute';
		let shiftX = event.clientX - taskCardStyles.left;
		let shiftY = event.clientY - taskCardStyles.top;
		taskCard.style.width = taskCardStyles.width + 'px';
		taskCard.style.height = taskCardStyles.height + 'px';
		taskCard.style.zIndex = 1000;

		document.body.append(taskCard);
		moveAt(event.pageX, event.pageY);

		function moveAt(pageX, pageY) {
			taskCard.style.left = pageX - shiftX + 'px';
			taskCard.style.top = pageY - shiftY + 'px';
		}

		let currentDroppable = null;

		function onMouseMove(event) {
			moveAt(event.pageX, event.pageY);

			taskCard.hidden = true;
			let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
			taskCard.hidden = false;
			if (!elemBelow) return;

			let droppableBelow = elemBelow.closest('.droppable');
			if (currentDroppable != droppableBelow) {
				if (currentDroppable) {
					leaveDroppable(currentDroppable);
					/*TODO сделать визуальное выделение taskFram'а*/
				}

				currentDroppable = droppableBelow;

				if(currentDroppable) {
					enterDroppable(currentDroppable);
					/*TODO Сделать функцию помещения задачи в таск фрейм */
				}
			}
		}

		document.addEventListener('mousemove', onMouseMove);

		taskCard.onmouseup = function() {
			document.removeEventListener('mousemove', onMouseMove);
			taskCard.onmouseup = null;
		};

		taskCard.ondragstart = function() {
			return false;
		};

		function leaveDroppable(droppableElement) {
			console.log('Вы покидаете элемент:');
			console.log(droppableElement);
		}

		function enterDroppable(droppableElement) {
			console.log('Могу поместить задачу сюда:');
			console.log(droppableElement);
		}
	}
}
import { deleteTask } from "../../../functions/task/deleteTask";

export function moveTask(element, db, uid) {
	const taskCard = element;
	let taskCardFantom = taskCard.cloneNode(true);
	const taskCardId = element.dataset.id;
	let metaData = {};

	taskCard.onmousedown = function(event) {
		metaData = {
			taskCardParent: taskCard.parentElement.className.split(' ')[0],
		}
		const taskCardStyles = taskCard.getBoundingClientRect();

		taskCardFantom.style.position = 'absolute';
		taskCardFantom.style.width = taskCardStyles.width + 'px';
		taskCardFantom.style.height = taskCardStyles.height + 'px';

		let shiftX = event.clientX - taskCardStyles.left;
		let shiftY = event.clientY - taskCardStyles.top;
		taskCardFantom.style.zIndex = 1000;

		document.body.append(taskCardFantom);
		moveAt(event.pageX, event.pageY);

		function moveAt(pageX, pageY) {
			taskCardFantom.style.left = pageX - shiftX + 'px';
			taskCardFantom.style.top = pageY - shiftY + 'px';
		}

		let currentDroppable = null;
		let currentTaskFrame = null;

		function onMouseMove(event) {
			taskCard.style.backgroundColor = '#FFF0F5';
			moveAt(event.pageX, event.pageY);

			taskCardFantom.hidden = true;
			let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
			taskCardFantom.hidden = false;
			if (!elemBelow) return;

			let droppableBelow = elemBelow.closest('.droppable');
				if (currentDroppable != droppableBelow) {
					if (currentDroppable) {
						leaveDroppable(currentDroppable);
						currentTaskFrame = null;
					}

					currentDroppable = droppableBelow;

					if(currentDroppable) {
						enterDroppable(currentDroppable);
						currentTaskFrame = currentDroppable.className.split(' ')[0];
					}
				}
		}
	

		document.addEventListener('mousemove', onMouseMove);

		document.onmouseup = function() {
		document.removeEventListener('mousemove', onMouseMove);
		taskCard.style.backgroundColor = 'inherit';

			if(metaData.taskCardParent != currentTaskFrame &&
				currentTaskFrame != null) {
				taskCardFantom.hidden = true;
				deleteTask(metaData.taskCardParent, taskCardId, db, uid);
				/*TODO Добавление таска в выбранный фрейм */
			} else {
				taskCardFantom.hidden = true;
				return
			}

			taskCard.onmouseup = null;
			taskCard.onmousedown = null;
			currentTaskFrame = null;
		};

		taskCard.ondragstart = function() {
			return false;
		};

		function leaveDroppable(droppableElement) {
			droppableElement.style.boxShadow = null;
		}

		function enterDroppable(droppableElement) {
			droppableElement.style.boxShadow = '0 40px 20px rgba(0,0,0,0.5)';
		}
	}
}
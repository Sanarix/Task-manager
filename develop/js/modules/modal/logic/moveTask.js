import { deleteTask } from "../../../functions/task/deleteTask";

export function moveTask(element, db, uid) {
	const taskCard = element;
	const taskCardId = element.dataset.id;
	const main = document.querySelector('main');

	taskCard.onmousedown = function(event) {
		taskCard.style.position = 'absolute';
		taskCard.style.zIndex = 1000;
		document.body.append(taskCard);
		moveAt(event.pageX, event.pageY);

		function moveAt(pageX, pageY) {
			taskCard.style.left = pageX - taskCard.offsetWidth / 2 + 'px';
			taskCard.style.top = pageY - taskCard.offsetHeight / 2 + 'px';
		}

		function onMouseMove(event) {
			moveAt(event.pageX, event.pageY);
		}

		document.addEventListener('mousemove', onMouseMove);

		taskCard.onmouseup = function() {
			document.removeEventListener('mousemove', onMouseMove);
			taskCard.onmouseup = null;
		};

		taskCard.ondragstart = function() {
			return false;
		};
	}
}
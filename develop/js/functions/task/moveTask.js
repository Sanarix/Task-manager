import { deleteTask } from "./deleteTask";
import { pushTaskDB } from "./pushTaskDB";
import { updateTasksPosition } from "../frame/updateTasksPosition";
import { updateTaskFrame } from "../../modules/updateTaskFrame/updateTaskFrame";

export function moveTask(element, db, uid, time, pos) {
	const taskCard = element;
	let taskCardFantom = taskCard.cloneNode(true);
	const taskCardId = element.dataset.id;
	let metaData = {};

	taskCard.onmousedown = function(event) {
		if (event.target.closest('.task-card_menu')){
			return
		}
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
		let currentTaskFrame = null;//className of the format .class-of-task

		function onMouseMove(event) {
			taskCard.style.backgroundColor = '#fee7e6';
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
		taskCard.style.backgroundColor = '';

			if(metaData.taskCardParent != currentTaskFrame &&
				currentTaskFrame != null) {
				taskCardFantom.hidden = true;
				const taskCardHeader = 
				taskCard.querySelector('.task-card_header').textContent.trim();
				let taskCardText;

				if (taskCard.querySelector('.task-card_text')) {
					taskCardText = taskCard.querySelector('.task-card_text').textContent;
				}else {
					taskCardText = '';
				}
				const taskCardParent = document.querySelector(`.${currentTaskFrame}`);
				
				deleteTask(metaData.taskCardParent, taskCardId, db, uid);
				updateTasksPosition(taskCardParent, document.querySelector(`.${metaData.taskCardParent}`), taskCard)
				pushTaskDB(
					db, 
					uid, 
					taskCardHeader, 
					taskCardText, 
					taskCardId, 
					currentTaskFrame,
					time,
					pos
					);
					taskCardParent.style.boxShadow = null;
					updateTaskFrame(taskCardParent, taskCard, db, uid, taskCardId);
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
			taskCardFantom.style.backgroundColor = 'inherit';
		}

		function enterDroppable(droppableElement) {
			droppableElement.style.boxShadow = '0 40px 20px rgba(0,0,0,0.5)';
			droppableElement.style.transitionDuration = '300ms';
			taskCardFantom.style.backgroundColor = '#eeffde';
		}
	}
}
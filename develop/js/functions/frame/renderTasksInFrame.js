import { taskMenuHandler } from "../task/taskMenuHandler";
import { moveTask } from "../task/moveTask";
import { addCircleInFrame } from "./addCircleInFrame";
import { removeCircleInFrame } from "./removeCircleInFrame";

export function renderTasksInFrame(arr, selector, db, uid) {	
	const frame = document.querySelector(selector);
	const elementsInFrame = frame.children;

	arr == null ? addCircleInFrame(frame) : renderTasks();

	function renderTasks() {
		for (let task of arr) {
		
			for( let element of elementsInFrame) {
				if(element.classList.contains('task-frame_img')){
					removeCircleInFrame(frame);
				}else {
					/* Для Progress и Finished фреймов */
					frame.style.justifyContent = 'flex-start';
				}
			}
	
			frame.prepend(task);
			taskMenuHandler(task, db, uid);
			moveTask(task, db, uid, task.dataset.time, task.dataset.pos);
		}
	}
}
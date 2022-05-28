import { taskMenuHandler } from "../task/taskMenuHandler";
import { moveTask } from "../task/moveTask";
import { addCircleInFrame } from "./addCircleInFrame";

export function renderTasksInFrame(arr, selector, db, uid, img) {	
	const frame = document.querySelector(selector);
	const elementsInFrame = frame.children;

	arr == null ? addCircleInFrame(frame) : renderTasks();

	if(img) {
		addCircleInFrame(frame)
	}

	function renderTasks() {
		for (let task of arr) {
		
			for( let element of elementsInFrame) {
				if(element.classList.contains('task-frame_img')){
					element.hidden = true;
					frame.style.justifyContent = 'flex-start';
				}else {
					/* Для Progress и Finished фреймов */
					frame.style.justifyContent = 'flex-start';
				}
			}
	
			frame.prepend(task);
			taskMenuHandler(task, db, uid);
			moveTask(task, db, uid, task.dataset.time)
		}
	}
}
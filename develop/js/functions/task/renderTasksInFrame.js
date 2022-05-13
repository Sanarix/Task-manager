import { taskMenuHandler } from "./taskMenuHandler";
import { moveTask } from "../../modules/modal/logic/moveTask";
export function renderTasksInFrame(element, selector, db, uid) {	

		if(!element || !selector) {
			throw new Error('renderTasksInFrame must contain 2 args');
		}
		
		const frame = document.querySelector(selector);
		const elementsInFrame = frame.children;

		for( let element of elementsInFrame) {
			if(element.classList.contains('task-frame_img')){
				element.hidden = true;
				frame.style.justifyContent = 'flex-start';
			}else {
				/* Для Progress и Finished фреймов */
				frame.style.justifyContent = 'flex-start';
			}
		}

		frame.prepend(element);
		taskMenuHandler(element, db, uid);
		moveTask(element, db, uid)
}
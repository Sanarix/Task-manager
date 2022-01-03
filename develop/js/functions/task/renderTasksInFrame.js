import { taskMenuHandler } from "./taskMenuHandler";
import { moveTask } from "../../modules/modal/logic/moveTask";

export function renderTasksInFrame(element, selector, db, uid) {	

		if(!element || !selector) {
			throw new Error('renderTasksInFrame must contain 2 args');
		}
		
		const selectorItem = document.querySelector(selector);
		const selectorItemChildrens = selectorItem.children;

		for( let child of selectorItemChildrens) {
			if(child.classList.contains('task-frame_img')){
				child.remove();
				selectorItem.style.justifyContent = 'flex-start';
			}
		}
	
		selectorItem.prepend(element);
		taskMenuHandler(element, db, uid);
		moveTask(element, db, uid)
}
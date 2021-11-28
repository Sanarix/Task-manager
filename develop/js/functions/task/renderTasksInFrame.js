import { openModalChangeTask } from "../../modules/modal/logic/openModalChangeTask";

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

		element.addEventListener('click', event => {
			event.stopPropagation();
			openModalChangeTask(element, db, uid);
		})

		element.onmousedown = function(event) {

		}
		
		selectorItem.prepend(element);
}
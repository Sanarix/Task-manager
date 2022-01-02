import { openModalChangeTask } from "../../modules/modal/logic/openModalChangeTask";

export function taskMenuHandler(element, db, uid) {
	const button = element.querySelector('.task-card_menu');
	button.addEventListener('click', event => {
		event.preventDefault();
		event.stopPropagation();
		openModalChangeTask(element, db, uid);
	})
}
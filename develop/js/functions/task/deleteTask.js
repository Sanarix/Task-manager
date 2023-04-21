import {ref, remove } from "firebase/database";
import { closeModal } from "../../modules/modal/logic/closeModal";

export function deleteTask(parentElement, elementID, db, uid) {
	const tasks = document.querySelectorAll('.task-card');
			for (const task of tasks) {
				if(task.dataset.id === elementID) {
					task.remove();
				}
			}
			remove(ref(db, `users/${uid}/tasks/${parentElement}/${elementID}`));
			closeModal(true);
}
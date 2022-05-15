import { closeModal } from "../../modules/modal/logic/closeModal";
import { set, ref} from "firebase/database";

export function updateTask(parentElement, elementID, elementTime, db, uid) {
	const task = document.querySelector('.newTask');
	const header = task.querySelector('.title').textContent.trim();
	const text = task.querySelector('.task-text').innerHTML.trim();
	set(ref(db, `users/${uid}/tasks/${parentElement}/${elementID}`), {
		"taskHeader": header,
		"taskText": text,
		"time": elementTime
	})
	closeModal(true);
}
import { closeModal } from "../../modules/modal/logic/closeModal";
import { set, ref} from "firebase/database";

export function editTask(parentElement, elementID, elementTime, db, uid) {
	const task = document.querySelector('.newTask');
	const header = task.querySelector('.title').textContent.trim();
	const text = task.querySelector('.task-text').value;
	set(ref(db, `users/${uid}/tasks/${parentElement}/${elementID}`), {
		"taskHeader": header,
		"taskText": text,
		"time": elementTime
	})
	closeModal(true);
}
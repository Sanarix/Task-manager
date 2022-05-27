import { getDatabase, ref, child, push, update } from "firebase/database";

export function updateTask(task, parentElement, elementID, db, uid) {
	const header = task.querySelector('.task-card_header').
	textContent.trim();
	const text = task.querySelector('.task-card_text').textContent;

	const data = {
		"taskHeader": header,
		"taskText": text,
		"time": task.dataset.time,
		"position": 1
	};
	const updates = {};
	updates[`users/${uid}/tasks/${parentElement.classList[0]}/${elementID}`] = data;
	console.log(update(ref(db), updates));

	return update(ref(db), updates);
}
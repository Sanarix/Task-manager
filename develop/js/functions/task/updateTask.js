import { ref, set } from "firebase/database";

export function updateTask(task, parentElement, elementID, db, uid, pos) {
	const header = task.querySelector('.task-card_header').
	textContent.trim();
	const taskTime = task.dataset.time;
	let text;

	if(task.querySelector('.task-card_text')){
		text = task.querySelector('.task-card_text').textContent;
	}else {
		text = '';
	}

	async function up() {
		await set(ref(db, `users/${uid}/tasks/${parentElement.classList[0]}/${elementID}`), {
			"taskHeader": header,
			"taskText": text,
			"time": taskTime,
			"position": pos
		})
	}
	up();
}
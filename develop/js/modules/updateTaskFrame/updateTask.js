import { ref, update } from "firebase/database";
import { getPosition } from "../../functions/frame/getPosition";

export function updateTask(frame, currentTask, db, uid, key) {

	const task = currentTask;
	const header = task.querySelector('.task-card_header').textContent;
	let text = '';
	if(task.querySelector('.task-card_text')) {
		text = task.querySelector('.task-card_text').textContent;
	}
	const taskTime = task.dataset.time;
	const pos = getPosition(frame);

	const taskData = {
		"taskHeader": header,
		"taskText": text,
		"time": taskTime,
		"position": pos,
	}

	const updates = {};
  updates[`users/${uid}/tasks/${frame.classList[0]}/${key}`] = taskData;

  return update(ref(db), updates);
}
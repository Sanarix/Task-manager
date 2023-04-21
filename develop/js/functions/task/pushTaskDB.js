import { ref, set } from "@firebase/database";

export function pushTaskDB (db, uid, taskHeader, taskText, taskId, taskFrame, time, pos) {
	const taskData = {
		"taskHeader": taskHeader,
		"taskText": taskText,
		"time": time || null,
		"position": pos,
	}
	set(ref(db, `users/${uid}/tasks/${taskFrame || 'new-task-frame'}/${taskId}`), taskData);
}
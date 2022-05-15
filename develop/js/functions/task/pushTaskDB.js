import { ref, set } from "@firebase/database";

export function pushTaskDB (db, uid, taskHeader, taskText, taskId, taskFrame, time) {
	const taskData = {
		"taskHeader": taskHeader,
		"taskText": taskText,
		"time": time || null,
	}
	set(ref(db, `users/${uid}/tasks/${taskFrame || 'new-task-frame'}/${taskId}`), taskData);
}
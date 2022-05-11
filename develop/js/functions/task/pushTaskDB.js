import { ref, set } from "@firebase/database";

export function pushTaskDB (db, uid, taskHeader, taskText, taskId, taskFrame) {
	const taskData = {
		"taskHeader": taskHeader,
		"taskText": taskText
	}
	set(ref(db, `users/${uid}/tasks/${taskFrame || 'new-task-frame'}/${taskId}`), taskData);
}
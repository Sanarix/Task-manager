import { ref} from 'firebase/database';

export default function getTasks(db, uid) {
	const newTasks = ref(db, `users/${uid}/tasks/new-task-frame`);
	const progressTasks = ref(db, `users/${uid}/tasks/progress-task-frame`);
	const finishedTasks = ref(db, `users/${uid}/tasks/finish-task-frame`);

	return {newTasks, progressTasks, finishedTasks};
}
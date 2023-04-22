import { ref} from 'firebase/database';
import tasksListener from './tasksListener';

export default function getTasks(db, uid, setNewTasks, setProgressTasks, setFinishedTasks) {
	const newTasks = ref(db, `users/${uid}/tasks/new-task-frame`);
	const progressTasks = ref(db, `users/${uid}/tasks/progress-task-frame`);
	const finishedTasks = ref(db, `users/${uid}/tasks/finish-task-frame`);

	tasksListener(newTasks, setNewTasks);
	tasksListener(progressTasks, setProgressTasks);
	tasksListener(finishedTasks, setFinishedTasks);
}
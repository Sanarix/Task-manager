import { ref} from 'firebase/database';
import { onValue } from 'firebase/database';

export default function getTasks(db, uid, setTasks) {
	const newTasks = ref(db, `users/${uid}/tasks/new-task-frame`);
	const progressTasks = ref(db, `users/${uid}/tasks/progress-task-frame`);
	const finishedTasks = ref(db, `users/${uid}/tasks/finish-task-frame`);

	onValue(newTasks, (snapshot) => {
		const data = snapshot.val();
		for (let key in data) {
			const task = data[key];
			setTasks(prev => {
				return [...prev, {key, task}]
			})
		}
	})

	return {newTasks, progressTasks, finishedTasks};
}
import { onValue } from 'firebase/database';

export default function tasksListener(path, setTasks) {
	onValue(path, (snapshot) => {
		const data = snapshot.val();
		for (let key in data) {
			const task = data[key];
			setTasks(prev => {
				return [...prev, {key, task}]
			})
		}
	})
}
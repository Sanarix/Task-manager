import { ref, onValue } from 'firebase/database';
import { renderTasksInFrame } from './renderTasksInFrame.js';
import { taskNode } from './taskNode.js';
import { getTasksInFrame } from './getTasksInFrame.js';

export function getTasks(database) {
	const tasks = ref(database, 'tasks');
	onValue(tasks, (snapshot) => {
		const data = snapshot.val();
		const tasksInFrame = getTasksInFrame();
		for (let key in data){
			const keyPost = key;
			const dataPost = data[keyPost];

			if(tasksInFrame) {
				for (let task of tasksInFrame) {
					if(task.dataset.id === keyPost) {
						task.remove();
					}
				}
			}

			renderTasksInFrame(taskNode(keyPost, dataPost), '.new-task-frame');
		}
	})
}
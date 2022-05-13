import { ref, onValue } from 'firebase/database';
import { renderTasksInFrame } from './renderTasksInFrame.js';
import { taskNode } from './taskNode.js';
import { getTasksInFrame } from './getTasksInFrame.js';
import { taskFrame } from '../../modules/showTasksFrames/taskFrame.js';

export function getTasks(db, uid) {
	const newTasks = ref(db, `users/${uid}/tasks/new-task-frame`);
	const progressTask = ref(db, `users/${uid}/tasks/progress-task-frame`);
	const finishedTask = ref(db, `users/${uid}/tasks/finish-task-frame`);

	function checkDoubleTasks(tasks, selector) {
		onValue(tasks, (snapshot) => {
			const data = snapshot.val();
			const tasksInFrames = getTasksInFrame();

			if (!data && selector == '.new-task-frame') {
				const Img = new taskFrame();
				let img = Img.createImg('task-frame_img',
				'./../../../img/add-crist-in-circle.svg');
				renderTasksInFrame(img, selector, db, uid);
			}

			for (let key in data){
				const keyPost = key;
				const dataPost = data[keyPost];
	
					for (let task of tasksInFrames) {
						if(task.dataset.id === keyPost) {
							task.remove();
						}
					}	
				renderTasksInFrame(taskNode(keyPost, dataPost), selector, db, uid);
			}
		})
	}

	checkDoubleTasks(newTasks, '.new-task-frame');
	checkDoubleTasks(progressTask, '.progress-task-frame');
	checkDoubleTasks(finishedTask, '.finish-task-frame');

}
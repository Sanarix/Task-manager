import { ref, onValue } from 'firebase/database';
import { renderTasksInFrame } from './renderTasksInFrame.js';
import { taskNode } from './taskNode.js';
import { getTasksInFrame } from './getTasksInFrame.js';
import { taskFrame } from '../../modules/showTasksFrames/taskFrame.js';
import { addLoader } from '../../modules/loader/addLoader.js';
import { removeLoader } from '../../modules/loader/removeLoader.js';

export function getTasks(db, uid) {
	const newTasks = ref(db, `users/${uid}/tasks/new-task-frame`);
	const progressTask = ref(db, `users/${uid}/tasks/progress-task-frame`);
	const finishedTask = ref(db, `users/${uid}/tasks/finish-task-frame`);

	function checkDoubleTasks(tasks, selector) {

		addLoader(selector);
		
		const promise = new Promise((resolve, reject) =>{

			onValue(tasks, (snapshot) => {

				const data = snapshot.val();
				const tasksInFrame = getTasksInFrame(selector);
				const tasksArr = [];
	
				if (!data && selector == '.new-task-frame') {
					const Img = new taskFrame();//Заимствуем метод 
					const img = Img.createImg('task-frame_img',
					'./../../../img/add-crist-in-circle.svg');
					renderTasksInFrame(null, selector, db, uid, img);
				}
	
				for (let key in data){
					const keyPost = key;
					const dataPost = data[keyPost];
					tasksArr.push(taskNode(keyPost, dataPost, dataPost.time));
		
						for (let task of tasksInFrame) {
							if(task.dataset.id === keyPost) {
								task.remove();
							}
						}	
				}
				renderTasksInFrame(tasksArr, selector, db, uid);
				resolve();
			})
		})

		promise.then(()=>{
			removeLoader(selector);
		})
	}

	checkDoubleTasks(newTasks, '.new-task-frame');
	checkDoubleTasks(progressTask, '.progress-task-frame');
	checkDoubleTasks(finishedTask, '.finish-task-frame');
}
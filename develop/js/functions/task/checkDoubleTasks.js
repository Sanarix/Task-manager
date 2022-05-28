import { onValue } from 'firebase/database';
import { renderTasksInFrame } from '../frame/renderTasksInFrame.js';
import { taskNode } from './taskNode.js';
import { getTasksInFrame } from '../frame/getTasksInFrame.js';
import { addLoader } from '../../modules/loader/addLoader.js';
import { removeLoader } from '../../modules/loader/removeLoader.js';
import { addCircleInFrame } from '../frame/addCircleInFrame.js';

export function checkDoubleTasks(tasks, selector, db, uid) {
	addLoader(selector);
		
		const promise = new Promise((resolve, reject) =>{

			onValue(tasks, (snapshot) => {

				const data = snapshot.val();
				const tasksInFrame = getTasksInFrame(selector);
				const tasksArr = [];
	
				//Рисуем значок если нет задач
				if (!data && selector == '.new-task-frame') {
					const frame = document.querySelector(`${selector}`);
					addCircleInFrame(frame);
				}
	
				for (let key in data){
					const keyPost = key;
					const dataPost = data[keyPost];
					tasksArr.push(taskNode(keyPost, dataPost, dataPost.time, dataPost.position));
		
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

		promise.then(()=>{removeLoader(selector)})
}
import { onValue } from 'firebase/database';
import { renderTasksInFrame } from '../frame/renderTasksInFrame.js';
import { taskNode } from './taskNode.js';
import { getTasksInFrame } from '../frame/getTasksInFrame.js';
import { taskFrame } from '../../modules/showTasksFrames/taskFrame.js';
import { addLoader } from '../../modules/loader/addLoader.js';
import { removeLoader } from '../../modules/loader/removeLoader.js';

export function checkDoubleTasks(tasks, selector, db, uid) {
	addLoader(selector);
		
		const promise = new Promise((resolve, reject) =>{

			onValue(tasks, (snapshot) => {

				const data = snapshot.val();
				const tasksInFrame = getTasksInFrame(selector);
				const tasksArr = [];
	
				//Рисуем значок в .newTaskFrame 
				if (!data && selector == '.new-task-frame') {
					renderTasksInFrame(null, selector, db, uid, true);
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
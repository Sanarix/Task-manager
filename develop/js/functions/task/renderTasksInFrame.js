import { taskMenuHandler } from "./taskMenuHandler";
import { moveTask } from "./moveTask";

export function renderTasksInFrame(arr, selector, db, uid, img) {	
	const frame = document.querySelector(selector);
	const elementsInFrame = frame.children;

	arr == null ? addCircle() : renderTasks();

	function addCircle() {
		frame.innerHTML = '';
		frame.prepend(img);
		frame.style.justifyContent = 'center';
		return
	}

	function renderTasks() {
		try {
			arr.sort((a,b)=>{a.time<b.time? b : a});

			for (let task of arr) {
			
				for( let element of elementsInFrame) {
					if(element.classList.contains('task-frame_img')){
						element.hidden = true;
						frame.style.justifyContent = 'flex-start';
					}else {
						/* Для Progress и Finished фреймов */
						frame.style.justifyContent = 'flex-start';
					}
				}
		
				frame.prepend(task);
				taskMenuHandler(task, db, uid);
				moveTask(task, db, uid, task.dataset.time)
			}
		} catch (err){
			console.log('Error from renderTasksInFrame.js');
			console.log(err);
		}
	}
}
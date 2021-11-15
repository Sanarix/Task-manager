import { taskNode } from "./taskNode";
import { closeModal } from "../../modules/modal/logic/closeModal";

export function addTask() {
	const addTaskButton = document.querySelector('.btn-ok');
	const newTaskFrame = document.querySelector('.new-task-frame');

	addTaskButton.addEventListener('click', event => {
		event.preventDefault();
		const taskHeader = document.querySelector('.title').value;
		const taskText = document.querySelector('.task-text').value;
		const task = taskNode(taskHeader, taskText);

		for (let item of newTaskFrame.children) {

			if(!taskHeader && !taskText) {
				console.log('Для создания задачи нужен заголовок');
			}

			if(item.classList.contains('task-frame_img')) {
				newTaskFrame.innerHTML = '';
				newTaskFrame.classList.add('contains-tasks');
				newTaskFrame.append(task);
			}else{
				newTaskFrame.append(task);
			}
		}
		
		closeModal(true);
	})
}
import { openModal } from "./openModal.js";
import { newTask } from "../newTask.js";
import { addTask } from "../../../functions/task/addTask.js";

export function openModalNewTask(db, uid) {
	const newTaskFrame = document.querySelector('.new-task-frame');

	openModal(newTaskFrame, newTask(null,null,'Add task'), addTask, {db, uid});
}
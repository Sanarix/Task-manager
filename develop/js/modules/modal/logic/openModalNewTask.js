import { openModal } from "./openModal.js";
import { createNewTask } from "../newTask.js";

export function openModalNewTask() {
	const newTaskFrame = document.querySelector('.new-task-frame');

	openModal(newTaskFrame, createNewTask());

}
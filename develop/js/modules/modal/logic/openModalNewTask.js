import { openModal } from "./openModal.js";
import { createNewTask } from "../newTask.js";
import { addTask } from "../../../functions/addTask.js";

export function openModalNewTask() {
	const newTaskFrame = document.querySelector('.new-task-frame');

	openModal(newTaskFrame, createNewTask(), addTask);

}
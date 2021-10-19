import { openModal } from "./openModal";
import { createNewTask } from "../newTask";

export function openModalNewTask() {
	const newTaskFrame = document.querySelector('.new-task-frame');

	openModal(newTaskFrame, createNewTask());

}
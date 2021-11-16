import { openModal } from "./openModal.js";
import { createNewTask } from "../newTask.js";
import { addTask } from "../../../functions/task/addTask.js";

export function openModalNewTask(db) {
	const newTaskFrame = document.querySelector('.new-task-frame');

	openModal(newTaskFrame, createNewTask(), addTask, db);
}
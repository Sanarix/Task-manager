const newTasksElem = document.querySelector('.new-tasks');
const newTasksField = newTasksElem.querySelector('.tasks-field')
const continueTasksElem = document.querySelector('.continue-tasks');
const finishedTasksElem = document.querySelector('.finished-tasks');
const modalTask = document.querySelector('.modal-task');
const openModalButton = document.querySelector('.open-modal-button');
const addTaskText = document.querySelector('.add-task-text');
const closeButton = document.querySelector('.close-button');
const addTaskButton = document.querySelector('.add-task-button');

const newTasksArr = [];
const continueTasksArr = [];
const finishedTasksarr = [];



function createNewTask(taskText) {
	const taskForm = document.createElement('div');
	taskForm.classList.add('task');
	taskForm.innerHTML = `<p>${taskText}</p>`;
	newTasksField.appendChild(taskForm);
}

addTaskButton.addEventListener('click', event => {
	createNewTask(addTaskText.value);
	addTaskText.value = "";
	modalTask.classList.toggle('unvisible');
});

openModalButton.addEventListener('click', () => {
	modalTask.classList.toggle('unvisible');
});

closeButton.addEventListener('click', () => {
	modalTask.classList.toggle('unvisible');
});



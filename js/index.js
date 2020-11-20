const newTasksElem = document.querySelector('.new-tasks');
const newTasksField = newTasksElem.querySelector('.tasks-field')
const continueTasksElem = document.querySelector('.continue-tasks');
const finishedTasksElem = document.querySelector('.finished-tasks');
const modalTask = document.querySelector('.modal-task');
const openModalButton = document.querySelector('.open-modal-button');
const addTaskText = document.querySelector('.add-task-text');
const closeButton = document.querySelector('.close-button');
const addTaskButton = document.querySelector('.add-task-button');
const task = newTasksElem.querySelectorAll('.task');



function createNewTask(taskText) {
	const taskForm = document.createElement('div');
	taskForm.classList.add('task');
	taskForm.innerHTML = `<p class="task-text">${taskText}</p>`;
	newTasksField.appendChild(taskForm);
}

addTaskButton.addEventListener('click', event => {
	createNewTask(addTaskText.value);
	addTaskText.value = "";
	modalTask.classList.toggle('unvisible');
	document.body.style.overflow = '';
});

openModalButton.addEventListener('click', () => {
	modalTask.classList.toggle('unvisible');
	addTaskText.focus();
	document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
	modalTask.classList.toggle('unvisible');
	addTaskText.value = "";
	document.body.style.overflow = '';
});



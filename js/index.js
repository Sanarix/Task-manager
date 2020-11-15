const newTasksElem = document.querySelector('.new-tasks');
const continueTasksElem = document.querySelector('.continue-tasks');
const finishedTasksElem = document.querySelector('.finished-tasks');
const modal = document.querySelector('.modal');
const addTaskButton = document.querySelector('.add-task');
const closeButton = document.querySelector('.close-button');








addTaskButton.addEventListener('click', () => {
	modal.classList.toggle('unvisible');
});

closeButton.addEventListener('click', () => {
	modal.classList.toggle('unvisible');
});



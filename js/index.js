const newTasksElem = document.querySelector('.new-tasks');
const continueTasksElem = document.querySelector('.continue-tasks');
const finishedTasksElem = document.querySelector('.finished-tasks');
const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.open-modal-button');
const closeButton = document.querySelector('.close-button');








openModalButton.addEventListener('click', () => {
	modal.classList.toggle('unvisible');
});

closeButton.addEventListener('click', () => {
	modal.classList.toggle('unvisible');
});



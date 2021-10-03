import '../css/index.css';
import { showTasksFrames } from "./modules/showTasksFrames/showTasksFrames.js";

const logo = document.querySelector('.logo');
const main = document.querySelector('.main');

logo.addEventListener('click', () => {
	main.innerHTML = '';
	showTasksFrames();
})

showTasksFrames();
import loader from "./loader.js";

export function addLoader(selector) {
	const element = document.querySelector(`${selector}`);
	element.style.justifyContent = 'flex-start';
	element.innerHTML = loader();
}
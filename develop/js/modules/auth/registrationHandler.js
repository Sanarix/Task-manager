import { openModalAuth } from "../modal/logic/openModalAuth";

export function registrationHandler() {
	const returnButton = document.querySelector('.registration-button_return');

	returnButton.addEventListener('click', event => {
		event.preventDefault();
		console.log('tut');
		openModalAuth();
	})
}
import { openAuthModal } from "./openAuthModal";

export function buttonLogInListener(auth) {
	const logInButtons = document.querySelectorAll('.log-in');
	for (let button of logInButtons) {
		button.addEventListener('click', event => {
			event.preventDefault();
			openAuthModal(auth);
		})
	}
}
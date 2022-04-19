import { openAuthModal } from "./openAuthModal";

export function buttonLogInListener(auth) {
	const logInButton = document.querySelectorAll('.log-in');

	for(let button of logInButton) {
		button.addEventListener('click', event => {
			event.preventDefault();
			openAuthModal(auth);
		})
	}
}
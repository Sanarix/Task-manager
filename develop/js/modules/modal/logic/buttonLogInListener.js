import { openAuthModal } from "./openAuthModal";

export function buttonLogInListener(auth) {
	const logInButton = document.querySelector('.log-in');
	logInButton.addEventListener('click', event => {
		event.preventDefault();
		openAuthModal(auth);
	})
}
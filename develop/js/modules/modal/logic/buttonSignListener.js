import { openAuthModal } from "./openAuthModal";

export function buttonSignInListener(auth) {
	const signInButton = document.querySelector('.sign-in');
	signInButton.addEventListener('click', event => {
		event.preventDefault();
		openAuthModal(auth);
	})
}
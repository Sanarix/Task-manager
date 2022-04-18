import { signOut } from "@firebase/auth";

export function changeSignButton(status, auth) {
	const signInButton = document.querySelector('.sign-in');
	const signOutButton = document.querySelector('.sign-out');

	if(status) {
		signInButton.classList.remove('visible');
		signOutButton.classList.add('visible');
		signOutButton.addEventListener('click', event => {
			event.preventDefault();
			signOut(auth);
			const container = document.querySelector('.main');
			container.innerHTML = '';
		})
	}else {
		signInButton.classList.add('visible');
		signOutButton.classList.remove('visible');
	}
}
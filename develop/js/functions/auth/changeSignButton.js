import { signOut } from "@firebase/auth";

export function changeSignButton(status, auth) {
	const logInButton = document.querySelector('.log-in');
	const logOutButton = document.querySelector('.log-out');

	if(status) {
		logInButton.classList.remove('visible');
		logOutButton.classList.add('visible');
		logOutButton.addEventListener('click', event => {
			event.preventDefault();
			signOut(auth);
			const container = document.querySelector('.main');
			container.innerHTML = '';
		})
	}else {
		logInButton.classList.add('visible');
		logOutButton.classList.remove('visible');
	}
}
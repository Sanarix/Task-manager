export function changeSignButton(status) {
	const signInButton = document.querySelector('.sign-in');
	const signOutButton = document.querySelector('.sign-out');

	if(status) {
		signInButton.classList.remove('visible');
		signOutButton.classList.add('visible');
	}else {
		signInButton.classList.add('visible');
		signOutButton.classList.remove('visible');
	}
}
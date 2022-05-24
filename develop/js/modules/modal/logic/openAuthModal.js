import { authHandler } from '../../auth/authHandler.js'

export function openAuthModal(auth) {
	const overlay = document.querySelector('.overlay');
	const modalContent = document.querySelector('.modal-content');

	const modalHTML = `
		<div class="auth">
			<h3 class="modal-header auth-header">Log in</h3>
			<div class="inputs">
				<div class="wrapper">
				<input type="text" class="email" placeholder="Email">
				</div>
				<div class="wrapper">
				<input type="password" class="password" placeholder="Password">
				</div>
			</div>
			<div class="auth-buttons">
				<div class="auth-buttons_social">
					<button class="button-social button-social_github"><img src="./img/socials/social-github.svg" alt="GitHub"></button>
					<button class="button-social button-social_google"><img src="./img/socials/social-google.svg" alt="Google"></button>
				</div>
				<button class="auth-button auth-button_enter">Log in</button>
				<button class="auth-button auth-button_register">Register</button>
	</div>
	`

		overlay.classList.add('visible');
		modalContent.innerHTML = '';
		modalContent.innerHTML = modalHTML;
		authHandler(auth);

}

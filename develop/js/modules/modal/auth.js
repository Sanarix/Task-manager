import { openModal } from "./logic/openModal";
import { authHandler } from "../auth/authHandler";

export function auth() {

	const modalHTML = `
		<div class="auth">
			<h3 class="modal-header auth-header">Log in</h3>
			<div class="inputs">
				<input type="text" class="email" placeholder="Email">
				<input type="password" class="password" placeholder="Password">
			</div>
			<div class="auth-buttons">
				<div class="auth-buttons_social">
					<button class="button-social button-social_github"><img src="./img/socials/social-github.svg" alt="GitHub"></button>
					<button class="button-social button-social_google"><img src="./img/socials/social-google.svg" alt="Google"></button>
				</div>
				<button class="auth-button auth-button_enter">Sign in</button>
				<button class="auth-button auth-button_register">Register</button>
	</div>
	`

	openModal(false, modalHTML, authHandler);
}
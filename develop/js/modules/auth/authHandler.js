import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { openModalRegistration } from "../modal/logic/openModalRegistration.js";

export function authHandler(auth) {
		const authGoogle = document.querySelector('.button-social_google');
		const authGithub = document.querySelector('.button-social_github');
		const authEmail = document.querySelector('.auth-button_enter');

		const email = document.querySelector('.email').textContent;
		const password = document.querySelector('.password').textContent;

		authGoogle.addEventListener('click', async event => {
			event.preventDefault();
			const provider = new GoogleAuthProvider();
			const userData = await signInWithPopup(auth, provider);
		})

		authGithub.addEventListener('click', async event => {
			event.preventDefault();
			const provider = new GithubAuthProvider();
			const userData = await signInWithPopup(auth, provider);
		})

		authEmail.addEventListener('click', event => {
			event.preventDefault();
			signInWithEmailAndPassword(auth, email, password);
		})

	openModalRegistration();

}
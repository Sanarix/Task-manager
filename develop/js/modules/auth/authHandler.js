import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { openRegistrationModal } from "../modal/logic/openRegistrationModal.js";

export function authHandler(auth) {
		const authGoogle = document.querySelector('.button-social_google');
		const authGithub = document.querySelector('.button-social_github');
		const authEmail = document.querySelector('.auth-button_enter');

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

		authEmail.addEventListener('click', async event => {
			event.preventDefault();
			const email = document.querySelector('.email').value;
			const password = document.querySelector('.password').value;
			
			await signInWithEmailAndPassword(auth, email, password).then(() => {
			}).catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
			});
		})

	openRegistrationModal(auth);
}
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
			const email = document.querySelector('.email');
			const emailValue = document.querySelector('.email').value;
			const password = document.querySelector('.password');
			const passwordValue = document.querySelector('.password').value;
			
			await signInWithEmailAndPassword(auth, emailValue, passwordValue).then(() => {
			}).catch((error) => {
				const errorCode = error.code;
				const modalError = document.querySelector('.modal-error');
				toggleModalError(modalError);
				setTimeout(toggleModalError, 5000, modalError)

				if(errorCode =='auth/invalid-email') {
					highlightRed(email);
					highlightRollback(email);
					modalError.textContent = 'Incorrect email'
				}

				if(errorCode == 'auth/wrong-password') {
					highlightRed(password);
					highlightRollback(password);
					modalError.textContent = 'Invalid password'
				}

				if(errorCode == 'auth/user-not-found') {
					highlightRed(email);
					highlightRollback(email);
					modalError.textContent = 'The user with this email was not found, check the correctness of the email';
				}
			});
		})

	function toggleModalError(modalError) {
		modalError.classList.toggle('hidden');
	}

	function highlightRed(element) {
		element.style.backgroundColor = 'red';
	}

	function highlightRollback(element, delay) {
		element.onfocus = function() {
		element.style.backgroundColor = 'inherit';
		}
	}

	openRegistrationModal(auth);
}
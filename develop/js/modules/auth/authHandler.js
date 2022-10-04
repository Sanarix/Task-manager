import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, GithubAuthProvider} from "firebase/auth";
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

		authGithub.addEventListener('click', event => {
			event.preventDefault();
			const provider = new GithubAuthProvider();
			signInWithPopup(auth, provider)
			.then((result) => {
				const credentional = GithubAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
			}).catch((error) => {
				const errorCode = error.code;
				const credential = GithubAuthProvider.credentialFromError(error);
				alert(`Ups! Error : ${errorCode}`);
			});
		})

		authEmail.addEventListener('click', async event => {
			event.preventDefault();
			const email = document.querySelector('.email');
			const emailValue = document.querySelector('.email').value;
			const password = document.querySelector('.password');
			const passwordValue = document.querySelector('.password').value;

			await signInWithEmailAndPassword(auth, emailValue, passwordValue)
			.then(() => {
			}).catch((error) => {
				const errorCode = error.code;

				if(errorCode === 'auth/invalid-email') {
					highlightError(email, 'Incorrect email');
				}

				if(!password.value) {
					highlightError(password, 'Please enter your password');
					return;
				}

				if(errorCode === 'auth/wrong-password'
				|| errorCode === 'auth/internal-error'
				) {
					highlightError(password, 'Invalid password');
				}

				if(errorCode === 'auth/user-not-found') {
					highlightError(email, 'Something wrong! Check your email');
				}
			});
		})

		function highlightError(element, message) {
			element.style.borderColor = '#d33';
			element.style.backgroundColor = '#fee7e6';
			element.parentElement.classList.add('wrapper_error');
			element.parentElement.dataset.error = message;
			handlerHide(element);
			setTimeout(hideError, 5000, element);
		}

		function hideError(element) {
			handlerHide(element);
			element.parentElement.classList.remove('wrapper_error');
		}

		function handlerHide(element) {
			element.onfocus = function() {
				element.style.borderColor = 'inherit';
				element.style.backgroundColor = 'inherit';
				element.parentElement.classList.remove('wrapper_error');
			}
		}

	openRegistrationModal(auth);
}
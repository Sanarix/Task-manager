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
				const errorMessage = error.message;
				const modalError = document.querySelector('.modal-error');
				modalError.classList.toggle('hidden');
				setTimeout(()=>{
					modalError.classList.toggle('hidden');		
				}, 5000)

				if(errorCode =='auth/invalid-email') {
					highlightRed(email);
					setTimeout(highlightRollback, 5000, email);
					modalError.textContent = 'Incorrect email'
				}else {
					highlightRollback(email);
				}

				if(errorCode == 'auth/wrong-password') {
					highlightRed(password);
					setTimeout(highlightRollback, 5000, password);
					modalError.textContent = 'Invalid password'
				}else {
					highlightRollback(password);
				}
			});
		})

	function highlightRed(element) {
		element.style.backgroundColor = 'red';
	}

	function highlightRollback(element) {
		element.style.backgroundColor = 'inherit';
	}

	openRegistrationModal(auth);
}
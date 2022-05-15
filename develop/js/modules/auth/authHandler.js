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
					email.style.backgroundColor = 'red';
					modalError.textContent = 'Неправильный имейл'
				}else {
					email.style.backgroundColor = 'inherit';
				}

				if(errorCode == 'auth/wrong-password') {
					password.style.backgroundColor = 'red';
					modalError.textContent = 'Неправильный имейл'
				}else {
					password.style.backgroundColor = 'inherit';
				}
			});
		})

	openRegistrationModal(auth);
}
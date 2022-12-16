import { createUserWithEmailAndPassword} from "firebase/auth";
import { openAuthModal } from "../modal/logic/openAuthModal";

export function registrationHandler(auth) {
	const registrationButton = document.querySelector('.registration-button_register');
	const returnButton = document.querySelector('.registration-button_return');

	registrationButton.addEventListener('click', async event => {
		event.preventDefault();
		const email = document.querySelector('.email');
		const password = document.querySelector('.password');
		await createUserWithEmailAndPassword(auth, email.value, password.value)
		.then(()=>{}).catch((error) => {
			const errorCode = error.code.split(',');

			if(errorCode[0] === 'auth/invalid-value-(email)' && !email.value) {
				highlightError(email, 'Enter your Email');
			}

			//TODO add regexp for inputs to check correctness

			if(errorCode[1] 
				=== '-starting-an-object-on-a-scalar-field-invalid-value-(password)'
				&& password.value.length < 6
				) {
				highlightError(password, 'Check password! Password can not less than 6 characters.');
			}
		});
	})

	returnButton.addEventListener('click', event => {
		event.preventDefault();
		openAuthModal();
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
}}
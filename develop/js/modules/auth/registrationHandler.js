import { createUserWithEmailAndPassword} from "firebase/auth";
import { openAuthModal } from "../modal/logic/openAuthModal";

export function registrationHandler(auth) {
	const registrationButton = document.querySelector('.registration-button_register');
	const returnButton = document.querySelector('.registration-button_return');

	registrationButton.addEventListener('click', async event => {
		event.preventDefault();
		const email = document.querySelector('.email');
		const password = document.querySelector('.password');

		await createUserWithEmailAndPassword(auth, email, password)
		.then(()=>{}).catch((error) => {
			const errorCode = error.code.split(',');
			const errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);

			if(!email && errorCode[0] === 'auth/invalid-value-(email)') {
				highlightError(email, 'Incorrect Email');
			}

			//TODO add regexp to check email to correct

			if(
				!password.value 
				&& errorCode[1] 
				=== '-starting-an-object-on-a-scalar-field-invalid-value-(password)'
				) {
				highlightError(password, 'Please enter password. Password can not be less than 6 characters');
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
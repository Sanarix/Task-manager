import { createUserWithEmailAndPassword} from "firebase/auth";
import { openAuthModal } from "../modal/logic/openAuthModal";

export function registrationHandler(auth) {
	const registrationButton = document.querySelector('.registration-button_register');
	const returnButton = document.querySelector('.registration-button_return');

	registrationButton.addEventListener('click', event => {
		event.preventDefault();
		const email = document.querySelector('.email').value;
		const password = document.querySelector('.password').value;

		if(!email) {
			highlightError(email, 'Please add your email');
		}

		createUserWithEmailAndPassword(auth, email, password);
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
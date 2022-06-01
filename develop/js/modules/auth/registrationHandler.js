import { createUserWithEmailAndPassword} from "firebase/auth";
import { openAuthModal } from "../modal/logic/openAuthModal";

export function registrationHandler(auth) {
	const registrationButton = document.querySelector('.registration-button_register');
	const returnButton = document.querySelector('.registration-button_return');

	registrationButton.addEventListener('click', event => {
		event.preventDefault();
		const email = document.querySelector('.email').value;
		const password = document.querySelector('.password').value;
		createUserWithEmailAndPassword(auth, email, password);
	})

	returnButton.addEventListener('click', event => {
		event.preventDefault();
		openAuthModal();
	})
}
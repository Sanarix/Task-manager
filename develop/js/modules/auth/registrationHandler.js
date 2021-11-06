import { openModal } from "../modal/logic/openModal";
import { authHandler } from "./authHandler";
import { initializeApp } from 'firebase/app';
import { isAuth } from "./isAuth";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";


export function registrationHandler() {
	const registrationButton = document.querySelector('.registration-button_register');
	const returnButton = document.querySelector('.registration-button_return');
	const signOutButton = document.querySelector('.sign-out');

	registrationButton.addEventListener('click', async event => {
		event.preventDefault();
		const email = document.querySelector('.email');
		const password= document.querySelector('.password');

		initializeApp(
			{
				apiKey: "AIzaSyAuzFKnVdCA3v64P0Ea6FuV6aJDVKC-S6E",
				authDomain: "task-manager-5c313.firebaseapp.com",
				projectId: "task-manager-5c313",
				storageBucket: "task-manager-5c313.appspot.com",
				messagingSenderId: "453985294089",
				appId: "1:453985294089:web:5c97598f8abe0e0bb7e5d8"
			}
	);

	if(email.value && password.value) {
		const auth =  getAuth();

		if(email.value.length < 6) {
			alert('Пароль должен содержать минимум 6 символов')
		}

		await createUserWithEmailAndPassword(auth, email.value, password.value).then(() => {
			isAuth();
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
		}
	})


	returnButton.addEventListener('click', event => {
		event.preventDefault();
		openModal(null, auth(), authHandler);
	})
}
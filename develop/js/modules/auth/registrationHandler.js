import { openModal } from "../modal/logic/openModal";
import { authHandler } from "./authHandler";
import { auth } from "../modal/auth";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export function registrationHandler() {
	const registrationButton = document.querySelector('.registration-button_register');
	const returnButton = document.querySelector('.registration-button_return');

	registrationButton.addEventListener('click', event => {
		event.preventDefault();
		const email = document.querySelector('.email').value;
		const password= document.querySelector('.password').value;
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
	const auth = getAuth();
	createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		});
	})

	returnButton.addEventListener('click', event => {
		event.preventDefault();
		openModal(null, auth(), authHandler);
	})
}
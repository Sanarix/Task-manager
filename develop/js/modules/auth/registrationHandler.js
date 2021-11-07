import { openModal } from "../modal/logic/openModal";
import { authHandler } from "./authHandler";
import { initializeApp } from 'firebase/app';
import { auth } from '../modal/auth'
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";


export function registrationHandler() {
	const registrationButton = document.querySelector('.registration-button_register');
	const returnButton = document.querySelector('.registration-button_return');
	const signOutButton = document.querySelector('.sign-out');

	registrationButton.addEventListener('click', async event => {
		event.preventDefault();
		const email = document.querySelector('.email');
		const password= document.querySelector('.password');
	})

	returnButton.addEventListener('click', event => {
		event.preventDefault();
		auth();
	})
}
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { openModalRegistration } from "../modal/logic/openModalRegistration.js";

export function authHandler() {
		const authGoogle = document.querySelector('.button-social_google');
		const authGithub = document.querySelector('.button-social_github');
		const authEmail = document.querySelector('.auth-button_enter');

		const email = document.querySelector('.email').textContent;
		const password = document.querySelector('.password').textContent;

		authGoogle.addEventListener('click', async event => {
			event.preventDefault();
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
			const provider = new GoogleAuthProvider();
			const auth = getAuth();
			const userData = await signInWithPopup(auth, provider);
		})

		authGithub.addEventListener('click', async event => {
			event.preventDefault();
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
			const provider = new GithubAuthProvider();
			const auth = getAuth();
			const userData = await signInWithPopup(auth, provider);
		})

		authEmail.addEventListener('click', event => {
			event.preventDefault();
			const auth = getAuth();
			signInWithEmailAndPassword(auth, email, password);
		})

	openModalRegistration();

}
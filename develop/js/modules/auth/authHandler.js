import { getAuth, sighInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function authHandler() {
		const authGoogle = document.querySelector('.button-social_google');

		authGoogle.addEventListener('click', async event => {
			event.preventDefault();
			const provider = new GoogleAuthProvider();
			const auth = getAuth();
			signInWithPopup(auth, provider);
		})

}
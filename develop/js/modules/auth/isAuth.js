import { getAuth, onAuthStateChanged } from "firebase/auth";
import { showTasksFrames } from '../showTasksFrames/showTasksFrames';
import { closeModal } from "../modal/logic/closeModal";
export function isAuth() {
	const signInButton = document.querySelector('.sign-in');
	const signOutButton = document.querySelector('.sign-out');
	const auth = getAuth();

	onAuthStateChanged(auth, (user) => {
		if(user) {
			closeModal(true);
			showTasksFrames();

		}else {

		}
	});
}
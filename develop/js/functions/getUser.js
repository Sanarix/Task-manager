import { onAuthStateChanged } from "@firebase/auth";

export function getUser(auth) {
	return new Promise(resolve => onAuthStateChanged(auth, user => {
		resolve(user);
	}))
}
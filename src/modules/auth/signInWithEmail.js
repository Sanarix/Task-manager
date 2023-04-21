import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export default function signInWithEmail(email, password, setAuth) {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
	.then(userCredential => {

		const data = userCredential.user;
	})
}
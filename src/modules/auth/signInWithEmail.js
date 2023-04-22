import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export default function signInWithEmail(email, password, setUser, navigate) {
	const auth = getAuth();
	
	signInWithEmailAndPassword(auth, email, password)
	.then(userCredential => {
		const data = userCredential.user;
		setUser(data);
		navigate('/');
	})
}
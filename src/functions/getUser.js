import { getAuth } from 'firebase/auth';

export default function getUser() {
	const auth = getAuth();
	const user = auth.currentUser;

	return user
}
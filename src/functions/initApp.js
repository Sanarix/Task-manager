import authConfig from '../config/authConfig.json';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



export default function initApp() {
	const app = initializeApp(authConfig);
	const auth = getAuth(app);

	return auth;
}

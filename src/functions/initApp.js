import authConfig from '../config/authConfig.json';
import { initializeApp } from 'firebase/app';



export default function initApp() {
	const app = initializeApp(authConfig);
	return app;
}

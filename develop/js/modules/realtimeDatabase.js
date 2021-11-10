import { getDatabase } from 'firebase/database';

export function firebaseConfig(app) {
	const database = getDatabase(app);
}
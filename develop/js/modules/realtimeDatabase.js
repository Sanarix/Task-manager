import { getDatabase} from 'firebase/database';

export function realtimeDatabase(app) {
	const db = getDatabase(app);
	return db
}
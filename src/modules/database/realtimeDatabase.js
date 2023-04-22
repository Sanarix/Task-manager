import { getDatabase} from 'firebase/database';

export default function realtimeDatabase(app) {
	const db = getDatabase(app);
	return db
}
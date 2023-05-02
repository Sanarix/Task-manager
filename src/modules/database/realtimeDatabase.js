import { getDatabase} from 'firebase/database';

export default function realtimeDatabase(app) {
	return getDatabase(app);
}
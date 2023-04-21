import '../css/index.css';
import authConfig from '../../authConfig.json'
import { renderPages } from './modules/pages/renderPages.js';
import { buttonLogInListener } from './modules/modal/logic/buttonLogInListener.js';
import { getAuth} from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import { realtimeDatabase } from './modules/realtimeDatabase.js';
import { isAuth } from './functions/auth/isAuth';

const initApp = initializeApp(authConfig)

const auth = getAuth();
const db = realtimeDatabase(initApp);

renderPages(auth, db);
buttonLogInListener(auth);
isAuth(auth, db);
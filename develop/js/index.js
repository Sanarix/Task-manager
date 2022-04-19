import '../css/index.css';
import { renderPages } from './modules/pages/renderPages.js';
import { buttonLogInListener } from './modules/modal/logic/buttonLogInListener.js';
import { getAuth} from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import { realtimeDatabase } from './modules/realtimeDatabase.js';
import { isAuth } from './functions/auth/isAuth';

const initApp = initializeApp({
	apiKey: "AIzaSyAuzFKnVdCA3v64P0Ea6FuV6aJDVKC-S6E",
	authDomain: "task-manager-5c313.firebaseapp.com",
	databaseURL: "https://task-manager-5c313-default-rtdb.firebaseio.com",
	projectId: "task-manager-5c313",
	storageBucket: "task-manager-5c313.appspot.com",
	messagingSenderId: "453985294089",
	appId: "1:453985294089:web:5c97598f8abe0e0bb7e5d8"
})

const auth = getAuth();
const db = realtimeDatabase(initApp);

renderPages(auth, db);
buttonLogInListener(auth);
isAuth(auth, db);
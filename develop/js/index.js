import '../css/index.css';
import { renderPages } from './modules/pages/renderPages.js';
import { buttonSignInListener } from './modules/modal/logic/ButtonSignListener.js';
import { closeModal } from './modules/modal/logic/closeModal.js';
import { changeSignButton } from './functions/changeSignButton.js';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import { realtimeDatabase } from './modules/realtimeDatabase.js';
import { showTasksFrames } from './modules/showTasksFrames/showTasksFrames';
import { getTasks } from './functions/task/getTasks';
import { renderTasksInFrame } from './functions/task/renderTasksInFrame';

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

renderPages(auth);
buttonSignInListener(auth);
const db = realtimeDatabase(initApp);

onAuthStateChanged(auth, user => {
	if(user) {
		changeSignButton(true, auth);
		closeModal(true);
		showTasksFrames();
		getTasks(db);
	}else {
		changeSignButton(false);
	}
})
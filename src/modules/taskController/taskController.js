import realtimeDatabase from "../database/realtimeDatabase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import getTasks from "./getTasks";
// import checkDoubleTasks from "./checkDoubleTasks";
import { onValue } from "firebase/database";


export default function taskController(app) {
	const db = realtimeDatabase(app);
	const auth = getAuth();

	onAuthStateChanged(auth, (user) => {
		if( user ) {
			const {newTasks, progressTasks, finishedTasks} = getTasks(db, user.uid);
			// const checkedNewTasks = checkDoubleTasks(
			// 	newTasks, 
			// 	'new-tasks-frame', 
			// 	db, 
			// 	user.uid)
			// 	;
			// const checkedProgressTasks = checkDoubleTasks(
			// 	progressTasks, 
			// 	'progress-tasks-frame', 
			// 	db, 
			// 	user.uid
			// 	);
			// const checkedFinishedTasks = checkDoubleTasks(
			// 	finishedTasks, 
			// 	'finish-tasks-frame', 
			// 	db, 
			// 	user.uid
			// 	);
			// 	//TODO добавлять таски в фрейм

			onValue(newTasks, (snapshot) => {
				const data =snapshot.val();
				console.log(data);

			})
		}else {
			console.log('Авторизация отсутствует')
		}
	})
}
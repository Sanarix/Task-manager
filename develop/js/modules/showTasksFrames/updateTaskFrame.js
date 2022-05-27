import { updateTask } from "../../functions/task/updateTask";
import {ref, query, orderByChild, onValue} from "firebase/database";

export function updateTaskFrame(parentElement, currentTask, taskId, db, uid) {
const tasks = parentElement.children
let list;

if(tasks.length == 1) {
	updateTask(currentTask, parentElement, taskId, db, uid, 1);
}

	list = query(ref(db, `users/${uid}/tasks/${parentElement.classList[0]}`), orderByChild("position"));

	const data = new Promise((resolve, reject) => {
		onValue(list, (snapshot) => {
			const data = snapshot.val();
			resolve(data);
		})
	})

	data.then((data)=>{
		console.log(data)
	})
}
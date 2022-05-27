import { updateTask } from "../../functions/task/updateTask";
import { getDatabase, ref, query, orderByValue } from "firebase/database";

export function updateTaskFrame(parentElement, currentTask, taskId, db, uid) {
// 	При добавлении таска{
// 		Смотрим есть ли в фрейме таски, если нет то перемещённому таску присваиваем data-pos = 1; 
// 	Если таски есть, то Присваиваем перемещённому таску data-pos равную data-pos самого последнего таска +1;
// 	Производим таск.апдейт чтобы данные отправились на сервер.
// }

// 	При удалении таска{
// 		Начиная с последнего таска начинаем перебирать data-pos, прибавляя по 1, если data-pos следующего таска не равен data-pos+1 предыдущего, присваиваем ему это значение и так далее.
// 	}
const tasks = parentElement.children

if(tasks.length == 1) {
	updateTask(currentTask, parentElement, taskId, db, uid)
}
const topUserPostsRef = query(ref(db, `users/${uid}/tasks/${parentElement.classList[0]}`), orderByValue('position'));
console.log(topUserPostsRef);

}
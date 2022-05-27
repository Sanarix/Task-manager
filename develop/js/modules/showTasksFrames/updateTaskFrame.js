import { updateTask } from "../../functions/task/editTask";

export function updateTaskFrame(frame, currentTask) {
// 	При добавлении таска{
// 		Смотрим есть ли в фрейме таски, если нет то перемещённому таску присваиваем data-pos = 1; 
// 	Если таски есть, то Присваиваем перемещённому таску data-pos равную data-pos самого последнего таска +1;
// 	Производим таск.апдейт чтобы данные отправились на сервер.
// }

// 	При удалении таска{
// 		Начиная с последнего таска начинаем перебирать data-pos, прибавляя по 1, если data-pos следующего таска не равен data-pos+1 предыдущего, присваиваем ему это значение и так далее.
// 	}
const tasks = frame.children
let lastPos;
if(tasks.length == 1) {
	currentTask.dataset.pos = 1;
	console.log(currentTask);
	}else {
	for (let task of tasks) {
		console.log(task);
	}
}

}
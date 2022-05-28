import { taskFrame } from "../../modules/showTasksFrames/taskFrame";

export function addCircleInFrame(frame) {
	const Img = new taskFrame();//Заимствуем метод 
	const img = Img.createImg('task-frame_img',
	'./../../img/add-crist-in-circle.svg');

	frame.innerHTML = '';
	frame.prepend(img);
	frame.style.justifyContent = 'center';

	return
}
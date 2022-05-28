export function removeCircleInFrame(frame) {
	const sign = frame.querySelector('.task-frame_img');
	sign.remove();
	frame.style.justifyContent = 'flex-start';
}
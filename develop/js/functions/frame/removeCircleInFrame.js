export function removeCircleInFrame(frame) {
	const sign = frame.querySelector('.task-frame_img');
	if(sign) {
		sign.remove();
		frame.style.justifyContent = 'flex-start';
		frame.classList.remove('empty');
	}
}
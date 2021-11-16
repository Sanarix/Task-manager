export function renderTasksInFrame(element, selector) {	

	if(!element || !selector) {
		throw new Error('renderTasksInFrame must contain 2 args');
	}
	
	const selectorItem = document.querySelector(selector);
	const selectorItemChildrens = selectorItem.children;

	for( let child of selectorItemChildrens) {
		if(child.classList.contains('task-frame_img')){
			child.remove();
		}
	}
	
	selectorItem.prepend(element);
}
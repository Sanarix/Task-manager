export function renderTasksInFrame(element, selector) {	

	if(!element || !selector) {
		throw new Error('renderTasksInFrame must contain 2 args');
	}

	document.querySelector(selector).append(element);
}
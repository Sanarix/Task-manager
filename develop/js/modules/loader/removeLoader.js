export function removeLoader(selector) {
	const element = document.querySelector(`${selector}`);
	if(element.querySelector('.loader')) {
		element.querySelector('.loader').remove();
	}
	return
}
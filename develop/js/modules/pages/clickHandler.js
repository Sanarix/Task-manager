import { openModalAuth } from "../modal/logic/openModalAuth";

export function clickHandler(pages) {
	const main = document.querySelector('.main');
	const nav = document.querySelector('.header-nav');

nav.addEventListener('click', (event) => {
	const target = event.target;

	if(target.dataset.name == "null") {
		return
	}
	
	for (let page of pages) {
		if(target.dataset.name == page.name) {
			main.innerHTML = page.func();
		}
		if(page.handler) {
			page.handler();
		}
	}
})
	openModalAuth();
}

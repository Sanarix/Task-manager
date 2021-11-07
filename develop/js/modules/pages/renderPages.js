import { settings } from "./settings.js";
import { about } from "./about.js";
import { contacts } from "./contacts.js";

export function renderPages() {
	const pages = [settings, about, contacts];
	const main = document.querySelector('.main');
	const nav = document.querySelector('.header-nav');

	nav.addEventListener('click', (event) => {
		const target = event.target;

		if(target.dataset.name == "null") {
			return
		}else {	
			for (let page of pages) {
				if (target.dataset.name == page.name) {
						main.innerHTML = page();
				}
			}
		}
	})
}
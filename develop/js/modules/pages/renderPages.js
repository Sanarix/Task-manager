import { settings } from "./settings";
import { about } from "./about";
import { contacts } from "./contacts";
import { auth } from "../modal/auth";

export function renderPages() {
	const pages = [settings, about, contacts, auth];
	const main = document.querySelector('.main');
	const nav = document.querySelector('.header-nav');

	nav.addEventListener('click', (event) => {
		const target = event.target;

		if(target.dataset.name == "null") {
			return
		}else {	
			for (let page of pages) {
				if (target.dataset.name == page.name) {
						main.innerHTML = page() || '';
				}
			}
		}
	})
}
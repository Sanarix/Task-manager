import { settings } from "./settings.js";
import { about } from "./about.js";
import { contacts } from "./contacts.js";
import { showTasksFrames } from "../showTasksFrames/showTasksFrames.js";
import { onAuthStateChanged } from "@firebase/auth";

export function renderPages(auth) {
	const pages = [settings, about, contacts];
	const main = document.querySelector('.main');
	const nav = document.querySelector('.header-nav');
	const logo = document.querySelector('.logo');

	logo.addEventListener('click', event => {
		event.preventDefault();
		onAuthStateChanged(auth, user => {
			if(user) {
				showTasksFrames();
			} 
		})
	})

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
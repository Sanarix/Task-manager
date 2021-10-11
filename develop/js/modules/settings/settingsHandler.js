import { modeTheme } from "./toggleTheme";
import { updateSettings } from "./updateSettings";

export function settingsHandler() {
	const switchs = document.querySelectorAll('.switch-btn');
	const submitBtn = document.querySelector('.submit-btn');
	
	for (let switchBtn of switchs) {
		switchBtn.addEventListener('click', () => {
		switchBtn.classList.toggle('switch-on');

		if(switchBtn.dataset.mode == 'theme') {
			modeTheme();
		}
		})
	}
	submitBtn.addEventListener('click', event => {
		event.preventDefault();
		const storage = updateSettings();
		let update = document.querySelector('.main').innerHTML;
		storage.setUpdate(update);
	})
}
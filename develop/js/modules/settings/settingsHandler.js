import { modeTheme } from "./toggleTheme";
import { updateSettings } from "./updateSettings";

export function settingsHandler() {
	const switchs = document.querySelectorAll('.switch-btn');
	
	for (let switchBtn of switchs) {
		switchBtn.addEventListener('click', () => {
		switchBtn.classList.toggle('switch-on');
		updateSettings();

		if(switchBtn.dataset.mode == 'theme') {
			modeTheme();
		}
		})
	}
}
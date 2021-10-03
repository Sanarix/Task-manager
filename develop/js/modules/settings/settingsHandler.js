export function settingsHandler() {
	const switchs = document.querySelectorAll('.switch-btn');
	
	for (let switchBtn of switchs) {
		switchBtn.addEventListener('click', () => {
		switchBtn.classList.toggle('switch-on');
		})
	}
}
import { settings } from "../pages/settings";

export function updateSettings() {
	const update = document.querySelector('.main').innerHTML;
	settings(update);
	console.log('updateSettings отработал, передаю значение в settings');
}
import { settingsHandler } from "./settingsHandler";
import { settings } from "../pages/settings";

export function updateSettings() {
	const update = document.querySelector('.main').innerHTML
	console.log('now we upd' + update);
	settings(update);
	settingsHandler();
}
import { settings } from "./settings";
import { about } from "./about";
import { contacts } from "./contacts";
import { clickHandler } from "./clickHandler";

export function renderPages() {
	const pages = [
		{
			func: settings,
			name: settings.name,
		},
		{
			func: about,
			name: about.name,
		},
		{
			func: contacts,
			name: contacts.name,
		},
	]

	clickHandler(pages);
}
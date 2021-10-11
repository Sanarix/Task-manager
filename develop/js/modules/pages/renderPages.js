import { settings } from "./settings";
import { about } from "./about";
import { contacts } from "./contacts";
import { clickHandler } from "./clickHandler";

import { settingsHandler } from "../settings/settingsHandler";

export function renderPages() {
	const pages = [
		{
			func: settings,
			name: settings.name,
			handler: settingsHandler,
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
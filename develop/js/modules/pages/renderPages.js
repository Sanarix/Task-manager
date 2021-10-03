import { settings } from "./settings";
import { about } from "./about";
import { contacts } from "./contacts";
import { clickHandler } from "./clickHandler";

import { updateSettings } from "../settings/updateSettings";

export function renderPages() {
	const pages = [
		{
			func: settings,
			name: settings.name,
			handler: updateSettings,
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
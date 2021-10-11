import { updateSettings } from "../settings/updateSettings";

export function settings() {
	const storage = updateSettings();
	const result = storage.getUpdate();
	console.log(result);
	const settings = result || `<div class="settings-container">
		<div class="main-settings">
			<h3>Main settings</h3>
	
			<div class="setting-option main-theme">
				<header class="setting-option_header">
					Dark mode
				</header>
				<div class="switch-btn" data-mode="theme"></div>
			</div>
	
		</div>
	
		<div class="special-options">
			<h3>Spicial options</h3>
	
			<div class="setting-option">
				Blind mode
				<div class="switch-btn" data-mode="blind"></div>
			</div>
	
		</div>
	
		<button class="submit-btn">Submit</button>
	
	</div>
		`;
		console.log('result = ' + result);
		console.log('so we have settings = ' + settings);
		console.log('now we return ' + settings);
		return settings
}
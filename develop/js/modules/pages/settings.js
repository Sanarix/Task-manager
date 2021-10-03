export function settings() {
	return `
	<div class="settings-container">
			<form action="settings">
				<fieldset>
					<legend>Main</legend>
					<label for="theme">Choose main theme:</label>
					<select name="theme" id="theme">
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
				</fieldset>
				<fieldset>
					<legend>Special</legend>
					<label for="blind">Blind mode:</label>
					Yes<input type="radio" id="blind" name="blind">
					No<input type="radio" id="blind" name="blind" checked>
				</fieldset>
				<button type="submit">Submit</button>
			</form>
		</div>
	`
}
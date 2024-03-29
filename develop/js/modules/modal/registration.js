export function registration() {
	return `
		<div class="registration">
			<h3 class="modal-header registration-header">Registration</h3>
			<div class="inputs">
				<div class="wrapper">
					<input type="text" class="email" placeholder="Email" required>
				</div>
				<div class="wrapper">
					<input type="password" class="password" placeholder="Password" required>
				</div>
				<div class="wrapper">
					<input type="text" class="nickname" placeholder="Nickname">
				</div>
			</div>
			<div class="registration-buttons">
				<button class="registration-button registration-button_register">Register</button>
				<button class="registration-button registration-button_return">Return</button>
	</div>
	`
}
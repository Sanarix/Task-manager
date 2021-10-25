export function auth() {
	return `
		<div class="auth">
			<h3 class="auth-header">Log in</h3>
			<div class="inputs">
				<input type="text" class="email" placeholder="Email">
				<input type="password" class="password" placeholder="Password">
			</div>
			<div class="auth-buttons">
				<button class="auth-button auth-button_enter">Enter</button>
				<button class="auth-button auth-button_register">Register</button>
		</div>
	`
}
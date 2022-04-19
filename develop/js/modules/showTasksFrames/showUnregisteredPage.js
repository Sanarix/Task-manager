import { unregistered } from "../pages/unregistered";

export function showUnregisteredPage () {
	const container = document.querySelector('.main');
	container.innerHTML = unregistered();
}
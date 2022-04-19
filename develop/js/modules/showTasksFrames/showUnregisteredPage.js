import { unregistered } from "../pages/unregistered";
import { buttonLogInListener } from "../modal/logic/buttonLogInListener";

export function showUnregisteredPage () {
	const container = document.querySelector('.main');
	container.innerHTML = unregistered();
	buttonLogInListener();
}
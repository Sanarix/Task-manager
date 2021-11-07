import { openModal } from "./openModal.js";
import { registration } from "../registration.js";
import { registrationHandler } from "../../auth/registrationHandler.js";

export function openRegistrationModal(auth) {
	const registrationButton = document.querySelector('.auth-button_register');
	openModal(registrationButton, registration(), registrationHandler, auth);
}
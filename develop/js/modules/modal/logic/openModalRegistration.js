import { openModal } from "./openModal.js";
import { registration } from "../registration.js";
import { registrationHandler } from "../../auth/registrationHandler.js";

export function openModalRegistration() {
	const registrationButton = document.querySelector('.auth-button_register');
	openModal(registrationButton, registration(), registrationHandler);
}
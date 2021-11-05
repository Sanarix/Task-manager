import { openModal } from "./openModal";
import { registration } from "../registration";
import { registrationHandler } from "../../auth/registrationHandler";

export function openModalRegistration() {
	const registrationButton = document.querySelector('.auth-button_register');
	openModal(registrationButton, registration(), registrationHandler);
}
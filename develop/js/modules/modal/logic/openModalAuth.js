import { auth } from '../auth';
import { openModal } from './openModal';

export function openModalAuth() {
	const loginButton = document.querySelector('.log-in');
	openModal(loginButton, auth());
}
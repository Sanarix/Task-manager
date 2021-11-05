import { auth } from '../auth';
import { openModal } from './openModal';
import { authHandler } from '../../auth/authHandler';


export function openModalAuth() {
	const loginButton = document.querySelector('.sign-in');
	openModal(loginButton, auth(), authHandler);
}
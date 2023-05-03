import google from '../img/socials/social-google.svg';
import github from '../img/socials/social-github.svg';

import edit from '../img/edit.svg';
import reset from '../img/reset.svg';
import submit from '../img/submit.svg';
import del from '../img/delete.svg';

export default function getImages() {
	return {
		socials: {
			google,
			github
		},
		task: {
			edit,
			reset,
			submit,
			del
		},
	}
}
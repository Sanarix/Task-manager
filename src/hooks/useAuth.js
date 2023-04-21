import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function useAuth() {
	//Get info from firebase
	const auth = getAuth();
	//auth status
	const [status, setStatus] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if(user) {
				setStatus(true)
			}else{
				setStatus(false)
			}
		})
	}, [auth])
	//true or false
	return status;
}
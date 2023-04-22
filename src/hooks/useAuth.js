import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function useAuth( setUser ) {
	//Get info from firebase
	const auth = getAuth();
	//auth status
	const [status, setStatus] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if(user) {
				setUser(user);
				setStatus(true)
			}else{
				setUser(null);
				setStatus(false)
			}
		})
	}, [auth])
	//true or false
	return status;
}
import { useState, useEffect } from "react";
import {useAuthState} from 'react-firebase-hooks/auth';
import {useFirebase} from '../context/FirebaseContext';

export default function useUser(app) {
	const {auth} = useFirebase();
	const [user, loading, error] = useAuthState(auth);
	
	return [user, loading, error];
}
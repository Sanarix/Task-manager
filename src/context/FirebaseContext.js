import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import realtimeDatabase from "../modules/database/realtimeDatabase";
import authConfig from '../config/authConfig.json';
import { createContext, useContext } from "react";

const FirebaseContext = createContext();

export function useFirebase() {
	return useContext(FirebaseContext);
}

export function FirebaseProvider({children}) {
	const app = initializeApp(authConfig);
	const auth = getAuth();
	const db = realtimeDatabase(app);
	return(
		<FirebaseContext.Provider value={{app, auth, db}}>
			{children}
		</FirebaseContext.Provider>
	)
	
}


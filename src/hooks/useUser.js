import { useState, useEffect } from "react";

export default function useUser(app) {
	const [user, setUser] = useState(null);
	
	return {
		user,
		setUser,
	}
}
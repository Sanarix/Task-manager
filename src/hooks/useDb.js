import { useState } from "react";

export default function useDb() {
	const [db, setDb] = useState(null)

	function setDatabase(value) {
		setDb(value);
	}

	function delDatabase() {
		setDb(null)
	}

	return {db, setDatabase, delDatabase}
}
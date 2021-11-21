import { onAuthStateChanged } from "@firebase/auth";
import { changeSignButton } from "./changeSignButton";
import { closeModal } from "../modules/modal/logic/closeModal";
import { showTasksFrames } from "../modules/showTasksFrames/showTasksFrames";
import { getTasks } from "./task/getTasks";

export function isAuth(auth, db) {
	onAuthStateChanged(auth, user => {
		if(user) {
			changeSignButton(true, auth);
			closeModal(true);
			showTasksFrames(db);
			getTasks(db);
		}else {
			changeSignButton(false);
		}
	})
}
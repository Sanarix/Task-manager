import { onAuthStateChanged } from "@firebase/auth";
import { changeSignButton } from "./changeSignButton";
import { closeModal } from "../../modules/modal/logic/closeModal";
import { showTasksFrames } from "../../modules/showTasksFrames/showTasksFrames";
import { getTasks } from "../task/getTasks";
import { showUnregisteredPage } from "../../modules/showTasksFrames/showUnregisteredPage";

export function isAuth(auth, db) {
	onAuthStateChanged(auth, async user => {
		if(user) {
			const uid = user.uid;
			changeSignButton(true, auth);
			closeModal(true);
			showTasksFrames(db, uid);
			getTasks(db, uid);
		}else {
			showUnregisteredPage();
			changeSignButton(false);
		}
	})
}
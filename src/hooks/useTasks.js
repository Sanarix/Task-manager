import { useEffect } from "react";
import { useState} from "react";
import realtimeDatabase from "../modules/database/realtimeDatabase";
import useDb from "./useDb";
import getTasks from "../modules/taskController/getTasks";

export default function useTasks(auth, app, user) {
	const [newTasks, setNewTasks] = useState([]);
	const [progressTasks, setProgressTasks] = useState([]);
	const [finishedTasks, setFinishedTasks] = useState([]);
	const {db, setDatabase} = useDb();

	useEffect(() => {
		if(auth) {
			setDatabase(realtimeDatabase(app));
		}else {
			setNewTasks([]);
			setProgressTasks([]);
			setFinishedTasks([]);
		}
	}, [auth])

	useEffect(() => {
		if(db) {
			getTasks(db, user.uid, setNewTasks, setProgressTasks, setFinishedTasks);
		}
	}, [db])

	//exclude duplicates of tasks
useEffect(() => {
  setNewTasks(newTasks)
  setProgressTasks(progressTasks)
  setFinishedTasks(finishedTasks)
}, [newTasks, progressTasks, finishedTasks, auth])

	return {
		newTasks,
		setNewTasks,
		progressTasks,
		setProgressTasks,
		finishedTasks,
		setFinishedTasks
	}
}
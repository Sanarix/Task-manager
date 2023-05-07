import { useEffect } from "react";
import { useState} from "react";
import realtimeDatabase from "../modules/database/realtimeDatabase";
import useDb from "./useDb";
import getTasks from "../modules/taskController/getTasks";

export default function useTasks(app, user) {
	const [newTasks, setNewTasks] = useState([]);
	const [progressTasks, setProgressTasks] = useState([]);
	const [finishedTasks, setFinishedTasks] = useState([]);
	const {db, setDatabase} = useDb();

	useEffect(() => {
		if(user) {
			setDatabase(realtimeDatabase(app));
		}else {
			setNewTasks([]);
			setProgressTasks([]);
			setFinishedTasks([]);
		}
	}, [user])

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
}, [newTasks, progressTasks, finishedTasks])

	return {
		newTasks,
		setNewTasks,
		progressTasks,
		setProgressTasks,
		finishedTasks,
		setFinishedTasks
	}
}
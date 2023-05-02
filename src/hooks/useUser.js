import { useState, useEffect } from "react";
import realtimeDatabase from "../modules/database/realtimeDatabase";
import useDb from "./useDb";
import getTasks from "../modules/taskController/getTasks";
import useTasks from "./useTasks";

export default function useUser(app) {
	const {
		newTasks,
		setNewTasks,
		progressTasks,
		setProgressTasks,
		finishedTasks,
		setFinishedTasks
	} = useTasks();
	const {setDatabase, delDatabase} = useDb();

	useEffect(() => {
		if(user) {
			const db = realtimeDatabase(app);
			setDatabase(db)
			getTasks(db, user.uid, setNewTasks, setProgressTasks, setFinishedTasks);
		}else {
			setNewTasks([]);
			setProgressTasks([]);
			setFinishedTasks([]);
			delDatabase();
		}
	}, [user])

	useEffect(() => {
		setNewTasks(newTasks)
		setProgressTasks(progressTasks)
		setFinishedTasks(finishedTasks)
	}, [newTasks, progressTasks, finishedTasks])

	return {
		user,
		setUser,
		newTasks,
		progressTasks,
		finishedTasks,
		setNewTasks,
		setProgressTasks,
		setFinishedTasks,
	}
}
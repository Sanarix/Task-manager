import { ref, onValue } from 'firebase/database';
import { renderTasksInFrame } from './renderTasksInFrame.js';
import { taskNode } from './taskNode.js';
import { getTasksInFrame } from './getTasksInFrame.js';
import { taskFrame } from '../../modules/showTasksFrames/taskFrame.js';
import { addLoader } from '../../modules/loader/addLoader.js';
import { removeLoader } from '../../modules/loader/removeLoader.js';
import { checkDoubleTasks } from './checkDoubleTasks.js';

export function getTasks(db, uid) {
	const newTasks = ref(db, `users/${uid}/tasks/new-task-frame`);
	const progressTask = ref(db, `users/${uid}/tasks/progress-task-frame`);
	const finishedTask = ref(db, `users/${uid}/tasks/finish-task-frame`);

	checkDoubleTasks(newTasks, '.new-task-frame', db, uid);
	checkDoubleTasks(progressTask, '.progress-task-frame', db, uid);
	checkDoubleTasks(finishedTask, '.finish-task-frame', db, uid);
}
import NewTaskFrame from "../components/NewTaskFrame";
import ProgressTaskFrame from "../components/ProgressTaskFrame";
import FinishedTaskFrame from "../components/FinishedTaskFrame";

export default function HomePage({newTasks, progressTasks, finishedTasks}) {

	return (
		<div className="container">
			<main className="main">
			<NewTaskFrame tasks={newTasks} />
			<ProgressTaskFrame tasks={progressTasks} />
			<FinishedTaskFrame tasks={finishedTasks} />
		</main>
		</div>
	)
}
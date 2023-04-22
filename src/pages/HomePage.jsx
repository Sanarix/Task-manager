import NewTaskFrame from "../components/NewTaskFrame";
import ProgressTaskFrame from "../components/ProgressTaskFrame";
import FinishedTaskFrame from "../components/FinishedTaskFrame";

export default function HomePage({tasks}) {
	return (
		<div className="container">
			<main className="main">
			<NewTaskFrame tasks={tasks}/>
			<ProgressTaskFrame />
			<FinishedTaskFrame />
		</main>
		</div>
	)
}
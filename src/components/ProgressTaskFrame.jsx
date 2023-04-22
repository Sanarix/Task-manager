import Task from "./Task";

export default function ProgressTaskFrame({tasks}) {
	return (
		<div className="frame">
			<header className="task-header task-in-progress">
				Continue Tasks
			</header>
			<div className="progress-task-frame task-frame droppable">
			{
						tasks.length ?
						tasks.reduce((arr, item) => {
							return arr.includes(item) ? arr : [...arr, item];
						}, []).map(({key, task}) => {
							return (
								<Task key={key} id={key} task={task} />
							)
						})
						:
						<div>Загрузка...</div>
				}
			</div>
		</div>
	)
}
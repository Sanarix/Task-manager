import Task from "./Task";

export default function NewTaskFrame({tasks, setModalOpen}) {
	return (
		<div className="frame">
			<header className="task-header new-task">
				New Tasks
			</header>
			<div className="new-task-frame task-frame droppable">
				{
						tasks.length ?
						tasks.reduce((arr, item) => {
							return arr.includes(item) ? arr : [...arr, item];
						}, []).map(({key, task}) => {
							return (
								<Task key={key} id={key} task={task} setModalOpen={setModalOpen}/>
							)
						})
						:
						<div>лоадер или крестик добавления задач</div>
				}
			</div>
		</div>
	)
}
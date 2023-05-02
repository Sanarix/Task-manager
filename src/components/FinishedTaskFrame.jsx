import Task from "./Task";

export default function FinishedTaskFrame({tasks, setModalOpen, setModalType}) {
	return (
		<div className="frame">
			<header className="task-header finished-task">
				Finished Tasks
			</header>
			<div className="finish-task-frame task-frame droppable">
			{
						tasks.length ?
						tasks.reduce((arr, item) => {
							return arr.includes(item) ? arr : [...arr, item];
						}, []).map(({key, task}) => {
							return (
								<Task key={key} id={key} task={task} setModalOpen={setModalOpen} setModalType={setModalType} />
							)
						})
						:
						<div>Загрузка...</div>
				}
			</div>
		</div>
	)
}
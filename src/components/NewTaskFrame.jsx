import Task from "./Task";
import {useOpenModalToggle} from '../context/ModalContext';

export default function NewTaskFrame({tasks}) {
	const openModalToggle = useOpenModalToggle();

	function handler(e) {
		if(e.target.classList.contains('new-task-frame')) {
			openModalToggle({isOpen: true, modalType: 'new'});
		}
	}

	return (
		<div className="frame" onClick={handler}>
			<header className="task-header new-task">
				New Tasks
			</header>
			<div className="new-task-frame task-frame droppable" onClick={handler}>
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
						<div>лоадер или крестик добавления задач</div>
				}
			</div>
		</div>
	)
}
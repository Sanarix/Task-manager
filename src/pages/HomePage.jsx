import NewTaskFrame from "../components/NewTaskFrame";
import ProgressTaskFrame from "../components/ProgressTaskFrame";
import FinishedTaskFrame from "../components/FinishedTaskFrame";
import ModalEdit from "../UI/MyModal/ModalEdit";
import useModal from "../hooks/useModal";

export default function HomePage({newTasks, progressTasks, finishedTasks}) {
	const [modalOpen, setModalOpen] = useModal();

	return (
		<div className="container">
			<main className="main">
			<NewTaskFrame tasks={newTasks} setModalOpen={setModalOpen} />
			<ProgressTaskFrame tasks={progressTasks} setModalOpen={setModalOpen}/>
			<FinishedTaskFrame tasks={finishedTasks} setModalOpen={setModalOpen}/>
			{modalOpen &&
			<ModalEdit setModalOpen={setModalOpen} />
			}
		</main>
		</div>
	)
}
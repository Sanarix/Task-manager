import NewTaskFrame from "../components/NewTaskFrame";
import ProgressTaskFrame from "../components/ProgressTaskFrame";
import FinishedTaskFrame from "../components/FinishedTaskFrame";
import MyModal from "../UI/MyModal/MyModal";
import useModal from "../hooks/useModal";
export default function HomePage({newTasks, progressTasks, finishedTasks}) {
	const {modalOpen, setModalOpen, modalType, modalTypeHandler} = useModal();

	return (
		<div className="container">
			<main className="main">
			<NewTaskFrame tasks={newTasks} setModalOpen={setModalOpen} setModalType={modalTypeHandler} />
			<ProgressTaskFrame tasks={progressTasks} setModalOpen={setModalOpen} setModalType={modalTypeHandler} />
			<FinishedTaskFrame tasks={finishedTasks} setModalOpen={setModalOpen} setModalType={modalTypeHandler} />
			{modalOpen && modalType==="edit" &&
			<MyModal modalHeader="Edit task" setModalOpen={setModalOpen} />
			}
			{
				modalOpen && modalType==="new" && 
				<MyModal modalHeader="Create task" setModalOpen={setModalOpen} modalType={modalType} />
			}
		</main>
		</div>
	)
}
import { useState } from "react"
import getImages from "../../functions/getImages";
import { useOpenModalToggle } from '../../context/ModalContext';
import {ref, push} from '@firebase/database';

export default function MyModal({modalHeader, taskHeader='', taskText='', modalType, ...args}) {
	const [header, setHeader] = useState(taskHeader);
	const [text, setText] = useState(taskText);
	const images = getImages();
	const openModalToggle = useOpenModalToggle();

	function resetHandler() {
		setHeader('');
		setText('');
	}

	function addTask(db, uid) {

	}
	

	return (
		<div className="overlay">
		<div className="modal-error hidden"></div>
		<div className="modal-container">
			<button className="close-button">
				<img src="./img/close.svg" alt="Close" onClick={() => {openModalToggle(false)}} />
			</button>
				<div className="modal-content">
					<div className="modal">
						<h2>{modalHeader}</h2>
							<div className="modal-body">
								<div className="text-area">
									<input className="title" placeholder="Title" onInput={(e) => {setHeader(e.target.value)}} value={header}></input>
									<textarea className="task-text" rows="10" placeholder="Task" onChange={(e) => {setText(e.target.value)}} value={text}></textarea>
								</div>
								<div className="vertical-line"></div>
								<div className="buttons">
									<button className="btn btn-submit"><img src={images.task.submit} alt="submit" className="btn-img" title="Save" /></button>
									<button className="btn btn-reset"><img src={images.task.reset} alt="reset" className="btn-img" title="Clear" onClick={resetHandler} /></button>
									{modalType!=="new" &&
									<button className="btn btn-delete"><img src={images.task.del} alt="delete" className="btn-img" title="Delete" /></button>
									}
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	)
}
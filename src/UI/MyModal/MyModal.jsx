import { useState } from "react"

export default function MyModal({modalHeader, taskHeader='', taskText='', setModalOpen, ...args}) {
	const [header, setHeader] = useState(taskHeader);
	const [text, setText] = useState(taskText);

	function resetHandler() {
		setHeader('');
		setText('');
	}

	return (
		<div className="overlay">
		<div className="modal-error hidden"></div>
		<div className="modal-container">
			<button className="close-button" onClick={() => {setModalOpen(false)}}>
				<img src="./img/close.svg" alt="Close" />
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
									<button className="btn btn-submit"><img src="./img/submit.svg" alt="submit" className="btn-img" title="Save" /></button>
									<button className="btn btn-reset"><img src="./img/reset.svg" alt="reset" className="btn-img" title="Clear" onClick={resetHandler} /></button>
									<button className="btn btn-delete"><img src="./img/delete.svg" alt="delete" className="btn-img" title="Delete" /></button>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	)
}
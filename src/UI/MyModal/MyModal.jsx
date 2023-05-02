export default function MyModal({header, setModalOpen, ...args}) {
	return (
		<div className="overlay">
		<div className="modal-error hidden"></div>
		<div className="modal-container">
			<button className="close-button" onClick={() => {setModalOpen(false)}}>
				<img src="./img/close.svg" alt="Close" />
			</button>
				<div className="modal-content">
					<div className="modal">
						<h2>{header}</h2>
							<div className="modal-body">
								<div className="text-area">
									<div className="title" contentEditable data-placeholder="Title"></div>
									<textarea className="task-text" rows="10" placeholder="Task"></textarea>
								</div>
								<div className="vertical-line"></div>
								<div className="buttons">
									<button className="btn btn-submit"><img src="./img/submit.svg" alt="submit" className="btn-img" title="Save" /></button>
									<button className="btn btn-reset"><img src="./img/reset.svg" alt="reset" className="btn-img" title="Clear" /></button>
									<button className="btn btn-delete"><img src="./img/delete.svg" alt="delete" className="btn-img" title="Delete" /></button>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	)
}
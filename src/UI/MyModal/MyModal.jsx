export default function MyModal({children, setModalOpen, ...args}) {
	return (
		<div className="overlay">
		<div className="modal-error hidden"></div>
		<div className="modal-container">
			<button className="close-button" onClick={() => {setModalOpen(false)}}>
				<img src="./img/close.svg" alt="Close" />
			</button>
				<div className="modal-content">
					{children}
				</div>
			</div>
		</div>
	)
}
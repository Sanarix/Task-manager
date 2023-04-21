export default function MyModal() {
	return (
		<div class="overlay">
		<div class="modal-error hidden"></div>
		<div class="modal-container">
			<button class="close-button">
				<img src="./img/close.svg" alt="Close" />
			</button>
				<div class="modal-content">
				</div>
			</div>
		</div>
	)
}
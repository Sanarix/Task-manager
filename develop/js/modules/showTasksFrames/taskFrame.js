export class taskFrame {
	constructor(container, className) {
		this.container = container;
		this.className = className;
	}

	render() {
		this.createFrame();
	}

	createFrame() {
		const taskFrame = document.createElement('div');
		taskFrame.className = this.className;
		this.container.append(taskFrame);
	}
}
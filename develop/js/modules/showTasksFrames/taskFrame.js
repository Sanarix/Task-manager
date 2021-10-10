export class taskFrame {
	constructor(container, className, headerClassName, headerText) {
		this.container = container;
		this.className = className;
		this.headerClassName = headerClassName;
		this.headerText = headerText;
	}

	render() {
		this.createFrame();
	}

	createFrame() {

		function div() {
			return document.createElement('div');
		}

		const frame = div();
		const taskFrame = div();
		const header = document.createElement('header');

		taskFrame.className = this.className;
		header.textContent =  this.headerText;
		header.className = this.headerClassName;	
		frame.append(header);
		frame.append(taskFrame);
		this.container.append(frame);
	}
} 
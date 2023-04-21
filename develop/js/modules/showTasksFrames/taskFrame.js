import { addCircleInFrame } from "../../functions/frame/addCircleInFrame";

export class taskFrame {
	constructor(container, className, headerClassName, headerText, img) {
		this.container = container;
		this.className = className;
		this.headerClassName = headerClassName;
		this.headerText = headerText;
		this.img = img;
	}

	render() {
		this.createFrame();
	}

	createImg(className, imageURL) {
		const img = document.createElement('img');
		img.className = className;
		img.src = imageURL;
		return img;
	}

	createFrame() {

		function div() {
			return document.createElement('div');
		}
		const frame = div();
		const taskFrame = div();
		const header = document.createElement('header');

		frame.className = 'frame';
		taskFrame.className = this.className;
		header.className = this.headerClassName;	
		header.textContent =  this.headerText;
		if (this.img) {
			addCircleInFrame(taskFrame)
		}
		frame.append(header);
		frame.append(taskFrame);
		this.container.append(frame);
	}
} 
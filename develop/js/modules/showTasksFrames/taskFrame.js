export class taskFrame {
	constructor(container, className, headerClassName, headerText, imageURL) {
		this.container = container;
		this.className = className;
		this.headerClassName = headerClassName;
		this.headerText = headerText;
		this.imageURL = imageURL;
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
		const img = document.createElement('img');

		frame.className = 'frame';
		taskFrame.className = this.className;
		header.className = this.headerClassName;	
		header.textContent =  this.headerText;
		if (this.imageURL) {
			img.className = 'task-frame_img';
			img.src = this.imageURL;
		}
		taskFrame.append(img);
		frame.append(header);
		frame.append(taskFrame);
		this.container.append(frame);
	}
} 
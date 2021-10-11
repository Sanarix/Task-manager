export class updateStorage{
	constructor() {
	}

	setUpdate(update) {
		this.update  = update;
		console.log('now this.update = ' + this.update);
	}

	getUpdate() {
		console.log('log from updateStorage. this.update = ' + this.update);
		return this.update;
	}
}
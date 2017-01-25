class Confessions {
	constructor() {
		this.confessions = [];
		this.subscribers = [];
	}

	subscribe(subscriber) {
		this.subscribers.push(subscriber);

		return () => {
			this.subscribers = this.subscribers.filter(x => x !== subscriber);
		};
	}

	get() {
		return [...this.confessions];
	}

	update(confessions) {
		this.confessions = [...confessions];
		this.subscribers.forEach(subscriber => subscriber(this.confessions));
	}
}

const confessions = new Confessions();

export default confessions;

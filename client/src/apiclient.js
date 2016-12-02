let confessionsStore = [];

const toJson = response => response.json();

export const getConfessions = () => fetch('http://127.0.0.1:3001/confessions').then(toJson).then(confessions => {
	confessionsStore = confessions;

	return confessionsStore;
});

export const getComments = (confessionId) => {
	return fetch(`http://127.0.0.1:3001/confessions/${confessionId}/comments`).then(toJson).then(comments => {
		let confession = confessionsStore.find(x => x.confessionId === confessionId);

		confession.comments = comments;
		confession.commentsCount = comments.length;

		return confessionsStore;
	});
}

const changeConfessionScore = (confessionId, method) => {
	return fetch(`http://127.0.0.1:3001/confessions/${confessionId}/score`, { method })
		.then(toJson)
		.then(confession => {
			let stored = confessionsStore.find(x => x.confessionId === confessionId);

			stored.score = confession.score;

			return confessionsStore;
		});
}

export const increaseScore = (confessionId) => changeConfessionScore(confessionId, 'POST');
export const decreaseScore = (confessionId) => changeConfessionScore(confessionId, 'DELETE');

export const putComment = (confessionId, content) => {
	return fetch(`http://127.0.0.1:3001/confessions/${confessionId}/comments`, { method: 'PUT', body: content })
		.then(toJson)
		.then(confession => {
			let stored = confessionsStore.find(x => x.confessionId === confessionId);

			stored.comments = confession.comments;
			stored.commentsCount = confession.commentsCount;

			return confessionsStore;
		});
}

export const Confess = (content) => {
	return fetch(`http://127.0.0.1:3001/confessions`, { method: 'POST', body: content }).then(toJson).then(confession => {
		confessionsStore.push(confession);

		return confessionsStore;
	});
}
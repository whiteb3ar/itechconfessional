import confessionsStore from './confessions';

const toJson = response => response.json();

export const getConfessions = () => fetch('http://127.0.0.1:3001/confessions').then(toJson).then((confessions) => {
confessionsStore.update(confessions);

	return confessionsStore.get();
});

export const confess = content => fetch('http://127.0.0.1:3001/confessions', { method: 'POST', body: content })
	.then(toJson).then((confession) => {
		const confessions = confessionsStore.get();

		confessionsStore.update([...confessions, confession]);

		return confessionsStore.get();
	});

const changeConfessionScore = (confessionId, method) => fetch(`http://127.0.0.1:3001/confessions/${confessionId}/score`, { method })
	.then(toJson)
	.then((confession) => {
		const confessions = confessionsStore.get();

		const newConfessions = confessions.map((x) => {
			if (x.confessionId !== confessionId) {
				return x;
			}

			return { ...x, score: confession.score };
		});

		confessionsStore.update(newConfessions);

		return confessionsStore.get();
	});

export const increaseScore = confessionId => changeConfessionScore(confessionId, 'POST');
export const decreaseScore = confessionId => changeConfessionScore(confessionId, 'DELETE');

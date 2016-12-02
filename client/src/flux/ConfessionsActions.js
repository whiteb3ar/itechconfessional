import AppDispatcher from './AppDispatcher.js';

const toJson = response => response.json();

export const fetchConfessions = () => {
	AppDispatcher.dispatch({
		actionType: 'FETCH_CONFESSIONS_START'
	});

	fetch("http://127.0.0.1:3001/confessions").then(toJson).then(json => {
		AppDispatcher.dispatch({
			actionType: 'FETCH_CONFESSIONS_SUCCESS',
			confessions: json
		});
	});
}

export const fetchComments = (confessionId) => {
	AppDispatcher.dispatch({
		actionType: 'FETCH_COMMENTS_START'
	});

	fetch(`http://127.0.0.1:3001/confessions/${confessionId}/comments`).then(toJson).then(json => {
		AppDispatcher.dispatch({
			actionType: 'FETCH_COMMENTS_SUCCESS',
			confessionId, comments: json
		});
	});	
}

export const confess = (content) => {
	AppDispatcher.dispatch({
		actionType: 'CONFESS_START'
	});

	return fetch(`http://127.0.0.1:3001/confessions`, { method: 'POST', body: content }).then(toJson).then(confession => {
		AppDispatcher.dispatch({
			actionType: 'CONFESS_START_SUCCESS',
			confession
		});
	});
}

const changeConfessionScore = (confessionId, method) => {
	AppDispatcher.dispatch({
		actionType: 'CHANGE_CONFESSION_SCORE_START'
	});

	fetch(`http://127.0.0.1:3001/confessions/${confessionId}/score`, { method })
		.then(toJson)
		.then(json => {
			AppDispatcher.dispatch({
				actionType: 'CHANGE_CONFESSION_SCORE_SUCCESS',
				confessionId, confession: json
			});
		});
}

export const increaseScore = (confessionId) => changeConfessionScore(confessionId, 'POST');
export const decreaseScore = (confessionId) => changeConfessionScore(confessionId, 'DELETE');

//TODO: convert to actions
export const putComment = (confessionId, content) => {
	AppDispatcher.dispatch({
		actionType: 'POST_COMMENT_START'
	});

	return fetch(`http://127.0.0.1:3001/confessions/${confessionId}/comments`, { method: 'PUT', body: content })
		.then(toJson)
		.then(confession => {
			AppDispatcher.dispatch({
				actionType: 'POST_COMMENT_SUCCESS',
				confessionId, confession: json
			});
		});
}
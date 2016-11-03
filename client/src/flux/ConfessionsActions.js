import AppDispatcher from './AppDispatcher.js';

export const fetchConfessions = () => {
	AppDispatcher.dispatch({
		actionType: 'FETCH_CONFESSIONS_START'
	});

	fetch("http://127.0.0.1:3001/confessions").then(x => x.json()).then(json => {
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

	fetch(`http://127.0.0.1:3001/confessions/${confessionId}/comments`).then(x => x.json()).then(json => {
		AppDispatcher.dispatch({
			actionType: 'FETCH_COMMENTS_SUCCESS',
			confessionId, comments: json
		});
	});	
}
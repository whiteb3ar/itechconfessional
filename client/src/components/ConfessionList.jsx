import React from 'react';

import Confession from './Confession.jsx';

//pure as initial implementation
export default ({ confessions, getComments }) => (
	<div className="confession-list">
		{ 
			confessions.map((x, i) => 
				<Confession 
							key={i} 
							content={x.content} 
							score={x.score} 
							comments={x.comments}
							commentsCount={x.commentsCount}
							getComments={() => getComments(x.confessionId)}
				/>
			)
		}
	</div>
);

/*

//with flux store but mix of concerns
import { fetchConfessions, fetchComments } from '../flux/ConfessionsActions.js';
import ConfessionsStore from '../flux/ConfessionsStore.js';

//just helper for map function
const withComments = (confessionId, comments) => confession => {
	if (confession.confessionId !== confessionId) {
		return confession;
	} else {
		return { ...confession,
			comments, commentsCount: comments.length
		};
	}
}

export default class ConfessionList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			confessions: []
		};

		this._onChange = this._onChange.bind(this);
	}

	_onChange() {
		this.setState({ ...this.state,
			confessions: ConfessionsStore.getConfessions()
		});
	}

	componentDidMount() {
		fetch("http://127.0.0.1:3001/confessions").then(x => x.json()).then(json => {
			this.setState({ ...this.state,
				confessions: json
			});
		});
	}

	getComments(id) {
		fetch(`http://127.0.0.1:3001/confessions/${id}/comments`).then(x => x.json()).then(comments => {
			var confessions = this.state.confessions.map(withComments(id, comments));

			this.setState({ ...this.state,
				confessions
			});
		});
	}

	// componentDidMount() {
	//     ConfessionsStore.addChangeListener(this._onChange);

	//     fetchConfessions();
	// }

	// componentWillUnmount() {
	// 	ConfessionsStore.removeChangeListener(this._onChange);
	// }

	// getComments(id) {
	// 	fetchComments(id);
	// }

	render() {
		return (
			<div className="confession-list">
				{ 
					this.state.confessions.map((x, i) => 
						<Confession 
									key={i} 
									content={x.content}
									score={x.score}
									comments={x.comments}
									commentsCount={x.commentsCount}
									getComments={() => this.getComments(x.confessionId)}
						/>
					)
				}
			</div>
		);
	}
}*/
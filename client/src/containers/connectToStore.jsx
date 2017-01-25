/*
HINT

import React from 'react';

import { getConfessions } from '../apiclient';
import confessionsStore from '../confessions';

export default WrappedComponent => class ConnectedToStoreComponent extends React.Component {
	constructor() {
		super();

		this.state = {
			confessions: []
		};
	}

	componentWillMount() {
		this.setState({
			confessions: confessionsStore.get()
		});
	}

	componentDidMount() {
		this.unsubscribe = confessionsStore.subscribe(confessions => this.setState({ confessions }));

		getConfessions();
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<WrappedComponent {...this.props} {...this.state} />
		);
	}
}*/
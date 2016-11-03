import React, { PropTypes } from 'react';

export default class ConfessInput extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			confess: ''
		};
	}

	handleChange(e) {
		this.setState({ ...this.state,
			confess: e.currentTarget.value
		});
	}

	render() {
		return (
			<div className="confess">
				<input className="confess__input" value={this.state.confess} onChange={this.handleChange} />
				<button onClick={this.props.onConfess}>Confess</button>
			</div>
		);
	}
}

ConfessInput.propTypes = {
	onConfess: PropTypes.func.isRequired
};
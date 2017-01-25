import React, { PropTypes } from 'react';
import highlighter from './Highlighter';

class InputWithSubmit extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.submitMessage = this.submitMessage.bind(this);

		this.state = {
			message: ''
		};
	}

	handleChange(e) {
		this.setState({
			message: e.currentTarget.value
		});
	}

	submitMessage() {
		if (this.state.message) {
			this.props.onSubmit(this.state.message);

			this.setState({
				message: ''
			});
		}
	}

	render() {
		return (
			<div className="confess" style={this.props.style}>
				<input
					className="confess__input"
					value={this.state.message}
					onChange={this.handleChange}
				/>
				<button
					disabled={!this.state.message}
					title={!this.state.message ? this.props.disabledTitle : ''}
					onClick={this.submitMessage}
				>
					{this.props.buttonText}
				</button>
			</div>
		);
	}
}

InputWithSubmit.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	disabledTitle: PropTypes.string.isRequired
};

export default highlighter(InputWithSubmit);

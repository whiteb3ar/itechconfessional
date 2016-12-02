import React, { PropTypes } from 'react';

const ConfessInput = () => (
	<div className="confess">
		<input className="confess__input" />
		<button>Confess</button>
	</div>
);

export default ConfessInput;

/*
HINT

constructor() {
	...

	this.handleChange = this.handleChange.bind(this);
	this.submitConfession = this.submitConfession.bind(this);

	this.state = {
		confess: ''
	};

	...
}

handleChange(e) {
	this.setState({ ...this.state,
		confess: e.currentTarget.value
	});
}

submitConfession() {
	this.props.onConfess(this.state.confess)

	this.setState({ ...this.state,
		confess: ''
	});
}

render() {
	...
	value={this.state.confess} onChange={this.handleChange}
	...
	onClick={this.submitConfession}
	...
}

ConfessInput.propTypes = {
	onConfess: PropTypes.func.isRequired
};
*/
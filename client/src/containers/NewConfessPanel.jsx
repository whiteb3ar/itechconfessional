import React from 'react';

import { confess } from '../apiclient';
import InputWithSubmit from '../components/InputWithSubmit';

class NewConfessPanel extends React.Component {
	submitConfession() {
		if (this.state.confess) {
			confess(this.state.confess);

			this.setState({
				confess: ''
			});
		}
	}

	render() {
		return (
			<InputWithSubmit
				buttonText="Confess"
				disabledTitle="Don't be silent"
				onSubmit={message => confess(message)}
			/>
		);
	}
}

export default NewConfessPanel;

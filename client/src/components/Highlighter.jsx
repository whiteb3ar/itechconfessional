import React from 'react';

let instances = [];
const knownComponents = []; 

let highlightIndex = -1;

document.onkeydown = (e) => {
	if (!e.ctrlKey || e.keyCode !== 37 && e.keyCode !== 39) {
		return; 
	}

	highlightIndex += 1;

	if (highlightIndex > instances.length - 1) {
		highlightIndex = -1;
		instances.forEach(x => x.highlight(false));
	} else {
		instances.forEach((x, i) => x.highlight(i === highlightIndex));
	}
}

export default (WrappedComponent) => {
	knownComponents.push(WrappedComponent.displayName);

	return class Highlighter extends React.Component {
		constructor() {
			super();

			this.state = {
				highlighting: false
			};
		}

		componentDidMount() {
			instances.push(this);
		}

		componentWillUnmount() {
			instances = instances.filter(x => x !== this);
		}

		highlight(enabled) {
			if (enabled !== this.state.highlighting) {
				this.setState({
					highlighting: enabled
				});
			}
		}

		render() {
			const {
				style,
				...rest
			} = this.props;

			const resultStyle = style ? { ...style } : {};

			if (this.state.highlighting) {
				resultStyle['boxShadow'] = 'rgba(0,0,0,0.8) 0 0 0 1000px';
				resultStyle['zIndex'] = 1;
			}

			return (
				<WrappedComponent {...rest} style={resultStyle} />
			);
		}
	}
}

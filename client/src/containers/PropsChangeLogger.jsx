import React from 'react';

export default (WrappedComponent) => {
  class PropsChangeLogger extends React.Component {
    componentWillReceiveProps(...args) {
      console.log(args);
    }

    render() {
      // Use JSX spread syntax to pass all props and state down automatically.
      return <WrappedComponent {...this.props} />;
    }
  }

  return PropsChangeLogger;
}
import React from 'react';

import ConfessionsStore from '../flux/ConfessionsStore.js';

export default (WrappedComponent) => {
  class WithSubscription extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        confessions: []
      };

      this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        ConfessionsStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        ConfessionsStore.removeChangeListener(this._onChange);
    }

    _onChange() {
      this.setState({ ...this.state,
        confessions: ConfessionsStore.getConfessions()
      });
    }

    render() {
      // Use JSX spread syntax to pass all props and state down automatically.
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }

  return WithSubscription;
}
import React, { Component, PropTypes } from 'react';

export default class Example extends Component {
  static propTypes = {
    someProp: PropTypes.any,
  };

  render() {
    return (
      <div>Test</div>
    );
  }
}

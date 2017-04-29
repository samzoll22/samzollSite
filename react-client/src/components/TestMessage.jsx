import React, {Component} from 'react';
import Typist from 'react-typist';
 
export default class TestMessage extends Component {
 
  render() {
    return (
      <Typist>
        Animate this text.
      </Typist>;
    );
  }
}

// <TestMessage statusMsg={this.state.statusMsg}/>
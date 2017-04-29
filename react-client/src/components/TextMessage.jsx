import React from 'react';
import TypeWriter from 'react-typewriter';

class TextMessage extends React.Component {
  constructor(props) {
    super(props);


  }
  



  render() {
    return (
      // Passing in text.

      <TypeWriter className="retro" typing={1}>{this.props.statusMsg}</TypeWriter>
    );
  }

}
export default TextMessage;

//I have force update in here, but it doesn't seem to be solving my problem (3/10 @9:35 PM)
//http://codepen.io/SyedAfrozPasha/pen/YWJwpy
//https://facebook.github.io/react/docs/react-component.html#forceupdate
// onTypingEnd={typing={-1}}
//Looking at the original github https://github.com/ianbjorndilling/react-typewriter
//it may be that I can use the methods/props available to alter the behavior of the component.
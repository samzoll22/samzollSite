import React from 'react';


class WindowFrame extends React.Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div className="well">

        <img className="center-block" src={this.props.currentImg}/>
      </div>
    );
  }

}
export default WindowFrame;





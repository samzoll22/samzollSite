import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Scroll from './components/scroller.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (
    <div>
      <h1 style={{ fontSize: '4em', textAlign: 'center', paddingTop: '1em' }} >Sam Zoll</h1>
      <Scroll />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
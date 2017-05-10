import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from './components/Scroller.jsx';
import Nav from './components/NavBar.jsx';
import { Col } from 'react-bootstrap';


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
      <Nav />
      <Col md={10} mdOffset={1}>
        <Scroll />
      </Col>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
      // <div className='animated fadeInUp logoTextStyle'>
        // <img src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/SamZoll-Text-2017.svg" alt="Sam Zoll Text" className='szText'/>
      // </div>
      // <div className='animated rotateIn flipInX logoStyle'>
      //   <img src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/SamZoll-Logo-2017.svg" alt="Sam Zoll Logo" className='szLogo'/>
      // </div>
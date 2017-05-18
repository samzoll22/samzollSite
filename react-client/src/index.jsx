import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from './components/Scroller.jsx';
import Nav from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { Col } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div>
      <Nav />
      <Col md={10} mdOffset={1}>
        <Scroll />
      </Col>
      <Footer />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

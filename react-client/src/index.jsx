import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from './components/Scroller.jsx';
import Nav from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { Grid, Col, Row } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(e) {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render () {
    return (
      <div>
        <Nav />
        <Col md={10} mdOffset={1}>
          <Scroll width={this.state.windowWidth}/>
        </Col>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import Scroll from 'react-scroll';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem, Image } from 'react-bootstrap';

let Link       = Scroll.Link;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }


  render () {
    return (
    <Navbar className="white" fixedTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Image className="szLogo" src="http://dhmyyrxmn8ugc.cloudfront.net/portfolio/SamZoll-Logo-2017.svg" alt="Sam Zoll Logo" responsive onClick={this.scrollToTop}/>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
            <NavDropdown eventKey={1} title="Projects" id="basic-nav-dropdown" >
              <MenuItem eventKey={1.1}><Link  to="projects" spy smooth duration={500} offset={-150} >Web Apps</Link></MenuItem>
              <MenuItem eventKey={1.2}><Link  to="nativeapps" spy smooth duration={500} offset={-100}>Native Apps</Link></MenuItem>
              <MenuItem eventKey={1.3}><Link  to="2d3d" spy smooth duration={500} offset={-100}>2D/3D Designs</Link></MenuItem>
            </NavDropdown>
          <NavItem eventKey={2} ><Link  to="about" spy smooth duration={300} offset={80}>About</Link></NavItem>
          <NavItem eventKey={3} ><Link  to="resume" spy smooth duration={700}>Resume</Link></NavItem>
          <NavItem eventKey={4} ><Link  to="contact" spy smooth duration={900}>Contact</Link></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default NavBar;

import React from 'react';
import Scroll from 'react-scroll';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem, Image } from 'react-bootstrap';

let Link       = Scroll.Link;

const NavBar = () => (
  <Navbar className="white" collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Image className="szLogo" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/SamZoll-Logo-2017.svg" alt="Sam Zoll Logo" responsive/>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>

        <NavItem eventKey={1} ><Link activeClass="active" to="webdesign" spy smooth duration={500}>Projects</Link></NavItem>
        <NavItem eventKey={2} ><Link activeClass="active" to="resume" spy smooth duration={700}>Resume</Link></NavItem>
        <NavItem eventKey={3} ><Link activeClass="active" to="contact" spy smooth duration={900}>Contact</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar;

  // <NavDropdown eventKey={1} title="Projects" >
  //   <Link activeClass="active" className="test1" to="test1" spy smooth duration={500}><MenuItem eventKey={1.1}>Web Design</MenuItem></Link>
  //   <Link activeClass="active" className="test2" to="test2" spy smooth duration={500}><MenuItem eventKey={1.2}>App Design</MenuItem></Link>
  //   <Link activeClass="active" className="test3" to="test3" spy smooth duration={500}><MenuItem eventKey={1.3}>2D/3D Design</MenuItem></Link>
  //   <MenuItem />
  // </NavDropdown>
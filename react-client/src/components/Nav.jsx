import React from 'react';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;

const Nav = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link activeClass="active" className="test1" to="test1" spy smooth duration={500}>Test 1</Link></li>
          <li><Link activeClass="active" className="test2" to="test2" spy smooth duration={500}>Test 2</Link></li>
          <li><Link activeClass="active" className="test3" to="test3" spy smooth duration={500}>Test 3</Link></li>
          <li><Link activeClass="active" className="test4" to="test4" spy smooth duration={500}>Test 4</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Nav;
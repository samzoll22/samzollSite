import React from 'react';
import { Jumbotron, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;

const Contact = (props) => (
  <Jumbotron className="white">
    <Col md={8} mdOffset={2} className="center">
      <Row className="textPaddBig">
      <h1> Let's get in touch! </h1>
      </Row>
      <Row>
      <h3><a href="mailto:szoll@me.com?Subject=Nifty%20Website!">email me @ szoll@me.com.</a></h3>
      </Row>
    </Col>
  </Jumbotron>
)

export default Contact;
import React from 'react';
import { Jumbotron, Button, Col, Row, Image, Glyphicon, Label, Well } from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;

const Contact = (props) => (
  <Jumbotron className="white textPaddBig">
    <Col md={8} mdOffset={2} className="center">
      <div className="white contactPadd">
      <Row className="textPaddBig">
        <Col md={6} mdOffset={3} className="center">
          <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/lets-get-in-touch.svg" responsive/>
        </Col>
      </Row>
      <Row className="textPaddBig">
        <h3 className="email"><a href="mailto:szoll@me.com?Subject=Nifty%20Website!">email me @ <Label style={{backgroundColor: "#108ee9"}}>szoll@me.com</Label></a></h3>
      </Row>
      <Row>
        <Col xs={6} xsOffset={3}>
        <Row>
        <Col xs={4}>
          <a href="https://github.com/samzoll22">
            <Image className="social" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/social/github-logo.svg" />
          </a>
        </Col>
        <Col xs={4}>
          <a href="https://www.linkedin.com/in/samzoll/">
            <Image className="social" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/social/linkedin-logo-button.svg" />
          </a>
        </Col>
        <Col xs={4}>
          <a href="https://www.instagram.com/szoll/">
            <Image className="social" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/social/instagram-logo.svg" />
          </a>
        </Col>
        </Row>
        </Col>
      </Row>
      </div>
    </Col>
  </Jumbotron>
)

export default Contact;
import React from 'react';
import { Jumbotron, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;

const Welcome = (props) => (
  <Jumbotron className="fullView white">
    <Col md={8} mdOffset={2}>
    <div className="textCenter textPaddBig">
      <Row className="center textPaddBig">
        <Image className="halfWidth" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/im-sam-zoll.svg"  />
      </Row>
      <Row>
        <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/im-a-digital-designer.svg"  />
      </Row>
    </div>
    <div className="down">
        <Link activeClass="active" to="projects" spy smooth duration={900}>
          <Glyphicon glyph="glyphicon glyphicon-chevron-down"/>
        </Link>
    </div>
    </Col>
  </Jumbotron>
)

export default Welcome;
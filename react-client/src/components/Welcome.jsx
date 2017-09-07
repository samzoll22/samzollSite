import React from 'react';
import { Jumbotron, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;

const Welcome = (props) => {
  if (props.mobile) {
    return (
    <Jumbotron className="fullView white">
      <Row>
        <Col sm={10} smOffset={1} md={8} mdOffset={2}>
        <div className="textCenter textPaddBig">
          <Row className="center textPaddBig">
            <Image className="halfWidth" src="http://dhmyyrxmn8ugc.cloudfront.net/portfolio/im-sam-zoll.svg"  />
          </Row>
          <Row>
            <Image src="http://dhmyyrxmn8ugc.cloudfront.net/portfolio/im-a-digital-designer.svg"  />
          </Row>
        </div>
        <div className="down">
            <Link activeClass="active" to="projects" spy smooth duration={400} offset={-150}>
              <Glyphicon glyph="glyphicon glyphicon-chevron-down"/>
            </Link>
        </div>
        </Col>
      </Row>
      <Row>
        <div className="mobileWarning center">
          <div style={{fontSize: '3vh'}}>
            <Glyphicon glyph="glyphicon glyphicon-phone" />
            <Glyphicon glyph="glyphicon glyphicon-eye-close" />
          </div>
          <h3>This is the mobile site. </h3>
          <h3>For full functionality use a desktop in fullscreen.</h3>
        </div>
      </Row>
    </Jumbotron>)
  } else {
    return (
      <Jumbotron className="fullView white">
        <Col md={8} mdOffset={2}>
        <div className="textCenter textPaddBig">
          <Row className="center textPaddBig">
            <Image className="halfWidth" src="http://dhmyyrxmn8ugc.cloudfront.net/portfolio/im-sam-zoll.svg"  />
          </Row>
          <Row>
            <Image src="http://dhmyyrxmn8ugc.cloudfront.net/portfolio/im-a-digital-designer.svg"  />
          </Row>
        </div>
        <div className="down">
            <Link activeClass="active" to="projects" spy smooth duration={400} offset={-150}>
              <Glyphicon glyph="glyphicon glyphicon-chevron-down"/>
            </Link>
        </div>
        </Col>
    </Jumbotron>
    )
  }

}

export default Welcome;
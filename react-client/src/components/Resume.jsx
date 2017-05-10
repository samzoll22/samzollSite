import React from 'react';
import { Well, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;

const Resume = () => (
  <Well className="resumeParent">
    <Row>
      <Col md={4} >
        <Col md={8} mdOffset={4}>
          <div className="resumeStyle">
            <h1 >Resume</h1>
            <a className="download" href="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/Sam-Zoll-Resume.pdf" block >
              Download <Glyphicon glyph="glyphicon glyphicon glyphicon-download-alt"/>
            </a>
          </div>
        </Col>
      </Col>
      <Col md={8} >
        <Row className="center textPaddBig">
          <Image className="resume" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/Sam-Zoll-Resume.png
  " />
        </Row>
      </Col>
    </Row>
  </Well>
)

export default Resume;
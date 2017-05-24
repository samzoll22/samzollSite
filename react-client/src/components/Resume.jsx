import React from 'react';
import { Well, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;

const Resume = (props) => (
  <Well className="resumeParent">
    <Row>
      <Col md={4} >
        <Col xs={4} xsOffset={4} md={8} mdOffset={4}>
          <div className="resumeStyle center">
            <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/Resume.svg" responsive/>
            <a className="download" target="_blank" href="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/Sam-Zoll-Resume.pdf" >
              Download <Glyphicon glyph="glyphicon glyphicon glyphicon-download-alt"/>
            </a>
          </div>
        </Col>
      </Col>
      {!props.mobile ? (<Col md={8} >
        <Row className="center textPaddBig">
        <a target="_blank" href="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/Sam-Zoll-Resume.pdf">
          <Image className="resume" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/Sam-Zoll-Resume.png" />
        </a>
        </Row>
      </Col>) : null}

    </Row>
  </Well>
)

export default Resume;
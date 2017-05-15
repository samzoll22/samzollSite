import React from 'react';
import { Well, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;

const About = () => (
  <div >
    <Well className="white center">
      <Col md={12} >
        <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/sam-i-am-text.svg" className="samTextSpacer" responsive width='300' />

            <h3 className="samFont"> I don't like green eggs and ham, but I do love designing beautifully assembled products that focus on creating meaningful user experiences. In particular, I'm passionate about crafting experiences from start to finish, from sketches to mockups, to a coded beautiful masterpiece. In my previous position at Purple Gator, I led a remote design team to create a trivia game user experience which has been ranked in the top casino apps in the US Apple App Store. Recently, I've built several applications including a food truck finding and ordering app, a real-time multiplayer text based game, and a ticket price comparison app.
            </h3>
      </Col>
    </Well>
    <Well className="contactPadd">
      <Row className="center miniSpacer">
        <h2> Toolbox Coming Soon </h2>
      </Row>
      <Row >
        <Col sm={6} className="center miniSpacer">
          <Image className="aboutImagesDesign" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design-tools.png"  />
        </Col>
        <Col sm={6} className="center miniSpacer">
          <Image className="aboutImagesDevelop" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer-tools.png"  />
        </Col>
      </Row>
    </Well>
  </div>
)

export default About;
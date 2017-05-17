import React from 'react';
import { Well, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;

const About = () => (
  <div >
    <Well className="white center contactPadd">
       <Row className="samFontHeader center">
        <h1 style={{fontSize:'4em'}}> About </h1>
      </Row>
      <Row>
        <Col md={10} mdOffset={1}>
              <h3 className="samFont center"> I love designing beautifully assembled products that focus on creating meaningful user experiences. In particular, I'm passionate about crafting experiences from start to finish, from sketches to mockups, to a coded beautiful masterpiece. In my previous position at Purple Gator, I led a remote design team to create a trivia game user experience which has been ranked in the top casino apps in the US Apple App Store. Recently, I've built several applications including a food truck finding and ordering app, a real-time multiplayer text based game, and a ticket price comparison app.
              </h3>
        </Col>
      </Row>
      <Row className="center miniSpacer">
        <h2> Toolbox Coming Soon </h2>
      </Row>
      <Row >
        <Col sm={6} className="center miniSpacer">
          <a href="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design-tools.png" class="aboutImagesDesign" title="About Designer"></a>
        </Col>
        <Col sm={6} className="center miniSpacer">
          <a href="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer-tools.png" class="aboutImagesDesign" title="About Developer"></a>
        </Col>
      </Row>
    </Well>

  </div>
)

export default About;
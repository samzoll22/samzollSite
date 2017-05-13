import React from 'react';
import { Well, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;

const About = () => (
  <Well className="aboutParent white samgif center">
    <Col md={6} >
      <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/sam-i-am-text.svg" className="samTextSpacer" responsive width='300' />

          <h3 className="samFont"> I don't like green eggs and ham, but I do love designing beautifully assembled products that focus on creating meaningful user experiences. In particular, I passionate about crafting experiences from start to finish, from sketches to mockups, to a coded beautiful masterpiece. In my previous position at Purple Gator, I led a remote design team to create a trivia game UX which has been ranked in the top Casino Apps in the US Apple App store. Recently, I've built several applications including a food truck finding and ordering app, a real-time multiplayer text based game, and a ticket price comparison app.
          </h3>
    </Col>
  </Well>
)

export default About;
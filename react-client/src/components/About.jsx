import React from 'react';
import { Well, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;

const About = () => (
  <Well className="aboutParent white samgif">
    <Col md={6} >
      <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/sam-i-am-text.svg" className="samTextSpacer" responsive />

          <h3 className="samFont"> I love crafting experiences from start to finish, from sketches to mockups, to a coded beautiful masterpiece. My passion lies in designing beautifully assembled products that focus on creating meaningful user experiences.  In my previous position at Purple Gator, I led a remote design team to create a trivia game UX which has been ranked in the top Casino Apps in the US Apple App store. Recently I've built several applications including a food truck finding and ordering app, a real-time multiplayer text based game, and a ticket price comparison app. My ideal role would be something similar to a hybrid between web designer and full stack engineer.
          </h3>
    </Col>
  </Well>
)

export default About;
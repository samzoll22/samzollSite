import React from 'react';
import { Well, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import Scroll from 'react-scroll';
import AboutGridDesign from './AboutGridDesign.jsx';
import AboutGridDev from './AboutGridDev.jsx';


let Link       = Scroll.Link;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      design: true,
      dev: true
    }
    this.designEnter = this.designEnter.bind(this);
    this.designLeave = this.designLeave.bind(this);
    this.devEnter = this.devEnter.bind(this);
    this.devLeave = this.devLeave.bind(this);
  }


  designEnter() {
    this.setState({
      design: true
    })
  }

  designLeave() {
    this.setState({
      design: false
    })
  }

  devEnter() {
    this.setState({
      dev: true
    })
  }

  devLeave() {
    this.setState({
      dev: false
    })
  }

  render () {
   return (
    <div >
      <Well className="white center contactPadd">
        <Row className="samFontHeader center">
          <Col xs={4} xsOffset={4} md={2} mdOffset={5} className="center">
            <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/about.svg" alt="about" responsive/>
          </Col>
        </Row>
        <Row>
          <Col md={10} mdOffset={1}>
                <h3 className="samFont center"> I love designing beautifully assembled products that focus on creating meaningful user experiences. In particular, I'm passionate about crafting experiences from start to finish, from sketches to mockups, to a coded elegant masterpiece. In my previous position at Purple Gator, I led a remote design team to create a trivia game UX which has been ranked in the top casino apps in the US Apple App Store. Recently, I've built several applications including a food truck finding and ordering app, a real-time multiplayer text based game, and a ticket price comparison app.
                </h3>
          </Col>
        </Row>
        <Row className="center" >
          <Col md={6} className="center miniSpacer" >
            <h2 className="aboutTitle" >Design Tools</h2>
            <Well>
              <Row className="animated bounceIn aboutIcons">
                <AboutGridDesign />
              </Row>
            </Well>
          </Col>
          <Col md={6} className="center miniSpacer" >
            <h2 className="aboutTitle" >Developer Tools</h2>
            <Well>
              <Row className="animated bounceIn aboutIcons">
                <AboutGridDev />
              </Row>
            </Well>
          </Col>
        </Row>
      </Well>
    </div>
    )
  }
}

export default About;

          // <Col md={6} className="center miniSpacer">
            // <div className="test" onMouseEnter={this.designEnter} onMouseLeave={this.designLeave}>
              //   {this.state.design ?
              // (<AboutGrid />)
              // : (<Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design-tools.svg" />)
        //      }
          //   </div>
          // </Col>
          // <Col md={6} className="center miniSpacer">
          //   <div className="test" onMouseEnter={this.devEnter} onMouseLeave={this.devLeave}>
          //     <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer-tools.svg" />
          //   </div>
          // </Col>

      // <Col xs={6} className="center miniSpacer">
      //      <div className="test" onMouseEnter={this.designEnter} onMouseLeave={this.designLeave}>
              // {this.state.design ?
              // (<Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/designer-logos.svg" />)
              // : (<Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design-tools.svg" />)
              // }
            // </div>
          // </Col>
          // <Col xs={6} className="center miniSpacer">
          //   <div className="test" onMouseEnter={this.devEnter} onMouseLeave={this.devLeave}>
          //     {this.state.dev ?
          //     (<Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer-logos.svg" />)
          //     : (<Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer-tools.svg" />)
          //     }
          //   </div>
          // </Col>




      // <Row className="center miniSpacer">
      //   <h2> Toolbox Coming Soon </h2>
      // </Row>

        // <Col xs={6} className="center miniSpacer">
        //   <div className="aboutImageSwap">
        //     <Image className="bottom" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/designer-logos.png" />
        //     <Image className="top" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design-tools.png" />
        //   </div>
        // </Col>
        // <Col xs={6} className="center miniSpacer">
        //   <div className="aboutImageSwap">
        //     <Image className="bottom" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer-logos.png" />
        //     <Image className="top" src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer-tools.png" />
        //   </div>
        // </Col>
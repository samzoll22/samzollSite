import React from 'react';
import { Well, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import { Slider } from 'antd';
import Iframe from 'react-iframe';
import Scroll from 'react-scroll';
import AboutGridDesign from './AboutGridDesign.jsx';
import AboutGridDev from './AboutGridDev.jsx';


let Link       = Scroll.Link;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 100
    }
    this.handleSlider = this.handleSlider.bind(this);
  }

  handleSlider(slider) {
    this.setState({
      slider
    })
  }



  render () {
  const sliderData = {
    0: 'Design',
    50: 'Hybrid',
    100: 'Code'
  }

  const val = this.state.slider;
  const sliderText = sliderData[this.state.slider];
  let sliderStyle0 = '#C4C4C8';
  let sliderStyle50 = '#C4C4C8';
  let sliderStyle100 = '#C4C4C8';

  if (val === 0) {
    sliderStyle0 = '#f50';
  } else if (val === 50) {
    sliderStyle50 = '#f50';
  } else if (val === 100) {
    sliderStyle100 = '#f50';
  }

   const skillz = {
     0: {
         style: {
           color: sliderStyle0,
         },
         label: sliderData[0]
     },
     50: {
         style: {
           color: sliderStyle50,
         },
         label: sliderData[50]
     },
     100: {
         style: {
           color: sliderStyle100,
         },
         label: sliderData[100]
     },
   }
   return (
    <div >
      <Well className="white center contactPadd">
        <Row className="samFontHeader center">
          <Col xs={4} xsOffset={4} md={2} mdOffset={5} className="center">
            <Image src="http://dhmyyrxmn8ugc.cloudfront.net/portfolio/about2.svg" alt="about" responsive/>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="center textPadd">
                <Image src="http://dhmyyrxmn8ugc.cloudfront.net/portfolio/Profile_Picture_2019_Sqaure.jpg" circle responsive className="profilePicture"/>
          </Col>
          <Col md={6} className="samAbout">
                <h3 className="samFontBig center"> I love designing beautifully assembled products that focus on creating meaningful user experiences. In particular, I'm passionate about crafting experiences from start to finish, from sketches to mockups, to a coded elegant masterpiece. 
                </h3>
                {/* In my previous position at Purple Gator, I led a remote design team to create a trivia game UX which has been ranked in the top casino apps in the US Apple App Store. Recently, I've built several applications including a food truck finding and ordering app, a real-time multiplayer text based game, and a ticket price comparison app. */}
          </Col>
        </Row>
        <Row className="samTextSpacer">
          <Col xs={4} xsOffset={4} md={2} mdOffset={5} className="center">
            <Image src="http://dhmyyrxmn8ugc.cloudfront.net/portfolio/what-i-do.svg" alt="what-i-do" responsive/>
          </Col>
        </Row>
        <Row >
          <Col xs={8} xsOffset={2}>
            {this.state.slider === 0 && (
              <div className="animated fadeIn center" style={{height: 300, display: 'inline-block'}}>
                <h2> Lo-Fi to Hi-Fi: Sketching + Mockups </h2>
                <div className="animated slideInLeft" >
                  <Image src='http://dhmyyrxmn8ugc.cloudfront.net/portfolio/about/sam-zoll-logo-drawing.png' height={250} responsive />
                  <h3>Hand-drawn sketches converted to vectors with Illustrator</h3>
                </div>
              </div>
              )
            }
            {this.state.slider === 50 && (
              <div className="animated fadeIn center" style={{height: 300, display: 'inline-block'}}>
                <h2> Raster to Vector: Design + Code Hybrid</h2>
                <div className="animated slideInLeft" >
                  <Image className="szLogoHover" src='http://dhmyyrxmn8ugc.cloudfront.net/portfolio/SamZoll-Logo-2017.svg' height={250} responsive />
                  <h3>Final Hi-Fi Vector Logo</h3>
                </div>
              </div>
              )
            }
            {this.state.slider === 100 && (
              <div className="animated fadeIn center" style={{height: 300, display: 'inline-block'}}>
                <h2> Static Design to Dynamic Code: SVG + CSS Animation </h2>
                <div className="animated slideInLeft" >
                  <Image className="szLogoHover" style={{padding: 10}} src='http://dhmyyrxmn8ugc.cloudfront.net/portfolio/about/sam-zoll-inner-line-animate.svg' height={250} responsive />
                  <Button bsSize="xsmall" target="_blank" href="https://codepen.io/samzoll22/pen/MowZyw"><a>View on Codepen</a></Button>
                </div>
              </div>
              )
            }
            <div className="samTextSpacer">
              <Slider marks={skillz} step={null} value={this.state.slider} defaultValue={100} onChange={this.handleSlider}/>
            </div>
          </Col>
        </Row>
        {this.props.mobile || true ? null
          : (
        <Row className="center" >
          <Col mdHidden md={6} className="center miniSpacer" >
            <h2 className="aboutTitle" >Design Tools</h2>
            <Well>
              <Row className="animated bounceIn aboutIcons">
                <AboutGridDesign width={this.props.width}/>
              </Row>
            </Well>
          </Col>
          <Col mdHidden md={6} className="center miniSpacer" >
            <h2 className="aboutTitle" >Developer Tools</h2>
            <Well>
              <Row className="animated bounceIn aboutIcons">
                <AboutGridDev width={this.props.width}/>
              </Row>
            </Well>
          </Col>
        </Row>
        )}
      </Well>
    </div>
    )
  }
}

export default About;
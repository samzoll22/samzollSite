import React from 'react';
import { Well, Button, Col, Row, Image, Glyphicon } from 'react-bootstrap';
import { Slider } from 'antd';
import Scroll from 'react-scroll';
import AboutGridDesign from './AboutGridDesign.jsx';
import AboutGridDev from './AboutGridDev.jsx';


let Link       = Scroll.Link;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 50
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
   console.log('this is it', this.state.slider)
   return (
    <div >
      <Well className="white center contactPadd">
        <Row className="samFontHeader center">
          <Col xs={4} xsOffset={4} md={2} mdOffset={5} className="center">
            <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/about.svg" alt="about" responsive/>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="center textPadd">
                <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/Profile_Picture_2017_Square.png" circle responsive className="profilePicture"/>
          </Col>
          <Col md={6} className="samAbout">
                <h3 className="samFont center"> I love designing beautifully assembled products that focus on creating meaningful user experiences. In particular, I'm passionate about crafting experiences from start to finish, from sketches to mockups, to a coded elegant masterpiece. In my previous position at Purple Gator, I led a remote design team to create a trivia game UX which has been ranked in the top casino apps in the US Apple App Store. Recently, I've built several applications including a food truck finding and ordering app, a real-time multiplayer text based game, and a ticket price comparison app.
                </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2}>
            {this.state.slider === 0 && (
              <div className="animated zoomIn center" style={{height: 200}}>
                <Image src='https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/SamZoll-Logo-2017.svg' width={200} responsive />
              </div>
              )
            }
            {this.state.slider === 50 && (
              <div className="animated zoomIn center" style={{height: 200}}>
                <Image src='https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/SamZoll-Logo-2017.svg' width={200} responsive />
              </div>
              )
            }
            {this.state.slider === 100 && (
              <div className="animated zoomIn center" style={{height: 200}}>
                <p data-height="200" data-theme-id="0" data-slug-hash="bfCDF" data-default-tab="css,result" data-user="blissdev" data-embed-version="2" data-pen-title="SVG w/ Filter + SVG Animation" class="codepen">See the Pen <a href="https://codepen.io/blissdev/pen/bfCDF/">SVG w/ Filter + SVG Animation</a> by Jordan Arentsen (<a href="https://codepen.io/blissdev">@blissdev</a>) on <a href="https://codepen.io">CodePen</a>.</p>
                <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
              </div>
              )
            }
            <Slider marks={skillz} step={null} value={this.state.slider} defaultValue={50} onChange={this.handleSlider}/>
          </Col>
        </Row>
        {this.props.mobile ? null
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
import React from 'react';
import Scroll from 'react-scroll';
import Welcome from './Welcome.jsx';
import About from './About.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';
import WebDesignTabs from './WebDesignTabs.jsx';
import AppDesignTabs from './AppDesignTabs.jsx';
import Design3dTabs from './3dDesignTabs.jsx';
import { Tabs, Carousel, Timeline } from 'antd';
import { Row, Col, Panel, Image, Label } from 'react-bootstrap';

const TabPane = Tabs.TabPane;

let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;


class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      // console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }

  render () {
    return (
      <div className="textPaddBig bottomSpacer">
        <Welcome className='animated fadeInUp'  mobile={this.props.mobile}/>
        <Row>
          <Col xs={4} xsOffset={4} md={2} mdOffset={5} className="center">
              <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/projects2.svg" alt="projects" responsive/>
          </Col>
        </Row>
        <Element name="projects" className="start">
          <div> </div>
        </Element>
        <Timeline className="bottomSpacer">
          <Element name="webdesign" >
          </Element>
            <Timeline.Item>
              <h3 className="textPaddBig">Web Apps</h3>
              <WebDesignTabs width={this.props.width} />
            </Timeline.Item>
          <Element name="nativeapps" >
          </Element>
          <Timeline.Item>
            <h3 className="textPaddBig">Native Apps</h3>
              <AppDesignTabs width={this.props.width} isMobile={this.props.mobile}/>
          </Timeline.Item>
          <Element name="2d3d">
          </Element>
          <Timeline.Item className="animated zoomIn">
            <h3 className="textPaddBig">2D/3D Design</h3>
              <Design3dTabs width={this.props.width} />
          </Timeline.Item>
          <Timeline.Item >
          </Timeline.Item>
        </Timeline>
        <Element name="about" className="aboutSpacer">
           <div> </div>
        </Element>
        <About className='animated fadeInUp' mobile={this.props.mobile} width={this.props.width} />
        <Element name="resume" className="animated zoomIn resumeSpacer">
          <div> </div>
        </Element>
        <Resume className='animated fadeInUp' width={this.props.width} mobile={this.props.mobile}/>
        <Element name="contact" style={{height: "300px"}} className="textPaddBig bottomSpacer">
          <Contact className='animated fadeInUp' />
        </Element>
      </div>
    )
  }
}

export default Section;
          // <a onClick={this.scrollToTop}><h1 style={{ fontSize: '4em', textAlign: 'center' }}>To the top!</h1></a>
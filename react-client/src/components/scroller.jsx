import React from 'react';
import Scroll from 'react-scroll';
import Welcome from './Welcome.jsx';
import Resume from './Resume.jsx';
import WebDesignTabs from './WebDesignTabs.jsx';
import AppDesignTabs from './AppDesignTabs.jsx';
import { Tabs, Carousel, Timeline } from 'antd';
import { Col, Panel, Image, Label } from 'react-bootstrap';

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
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
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
      <div>
        <Welcome className='animated fadeInUp'  />
        <Timeline>
          <Element name="webdesign" className="element">
            <Timeline.Item>
                <h3>Web Design</h3>
                <WebDesignTabs />
            </Timeline.Item>
          </Element>
          <Element name="appdesign" className="element">
          <Timeline.Item>
            <h3>App Design</h3>
              <AppDesignTabs />
          </Timeline.Item>
          </Element>
          <Element name="2d3d" className="element">
          <Timeline.Item className="animated zoomIn">
            <h3 className="textPaddBig">2D/3D Design</h3>
              <div style={{textAlign: 'center', fontSize: '2em'}}>
              <h1><Label>
                Coming Soon
              </Label></h1>
              </div>
          </Timeline.Item>
          </Element>
        </Timeline>
        <Element name="resume" className="element">
          <Resume className='animated fadeInUp'  />
        </Element>
      </div>
    )
  }
}

export default Section;
          // <a onClick={this.scrollToTop}><h1 style={{ fontSize: '4em', textAlign: 'center' }}>To the top!</h1></a>
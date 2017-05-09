import React from 'react';
import Scroll from 'react-scroll';
import WebDesignTabs from './WebDesignTabs.jsx';
import AppDesignTabs from './AppDesignTabs.jsx';
import { Tabs, Carousel, Timeline } from 'antd';
import { Col, Panel, Image } from 'react-bootstrap';

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
       <Timeline>
         <Timeline.Item>
          <h3>Web Design</h3>
           <Element name="test1" className="element">
              <WebDesignTabs />
          </Element>
          </Timeline.Item>
          <Timeline.Item>
            <h3>App Design</h3>
            <Element name="test2" className="element">
              <AppDesignTabs />
            </Element>
          </Timeline.Item>
          <Timeline.Item>
            <h3>2D/3D Design</h3>
            <Element name="test3" className="element">
              <WebDesignTabs />
            </Element>
          </Timeline.Item>
          <a onClick={this.scrollToTop}><h1 style={{ fontSize: '4em', textAlign: 'center' }}>To the top!</h1></a>
       </Timeline>
    )
  }
}

export default Section;
import React from 'react';
import Scroll from 'react-scroll';
import WebDesign from './WebDesign.jsx';
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
              <Tabs
                defaultActiveKey="1"
                tabPosition='left'
                style={{ height: 600 }}
              >
                <TabPane tab="Ticket Champ" key="1" className="animated fadeInLeftBig" >
                  <WebDesign />
                </TabPane>
                <TabPane tab="Oranges 2 Oranges" key="2" className="animated fadeInLeftBig"><WebDesign />
                </TabPane>
                <TabPane tab="Truck Hunt" key="3" className="animated fadeInLeftBig">
                <WebDesign />
                </TabPane>
              </Tabs>
          </Element>
          </Timeline.Item>
          <Timeline.Item>
            <h3>Web Design</h3>
            <Element name="test2" className="element">
              <Tabs
                defaultActiveKey="1"
                tabPosition='left'
                style={{ height: 600 }}
              >
                <TabPane tab="Ticket Champ" key="1" className="animated fadeInLeftBig" >
                  <WebDesign />
                </TabPane>
                <TabPane tab="Oranges 2 Oranges" key="2" className="animated fadeInLeftBig"><WebDesign />
                </TabPane>
                <TabPane tab="Truck Hunt" key="3" className="animated fadeInLeftBig">
                <WebDesign />
                </TabPane>
              </Tabs>
            </Element>
          </Timeline.Item>
          <Timeline.Item>
            <h3>Web Design</h3>
            <Element name="test3" className="element">
              <Tabs
                defaultActiveKey="1"
                tabPosition='left'
                style={{ height: 600 }}
              >
                <TabPane tab="Ticket Champ" key="1" className="animated fadeInLeft" >
                  <WebDesign />
                </TabPane>
                <TabPane tab="Oranges 2 Oranges" key="2" className="animated fadeInLeft"><WebDesign />
                </TabPane>
                <TabPane tab="Truck Hunt" key="3" className="animated fadeInLeft">
                <WebDesign />
                </TabPane>
              </Tabs>
            </Element>
          </Timeline.Item>
          <Timeline.Item>
            <h3>Web Design</h3>
            <Element name="test4" className="element">
              <Tabs
                defaultActiveKey="1"
                tabPosition='left'
                style={{ height: 600 }}
              >
                <TabPane tab="Ticket Champ" key="1" className="animated fadeInLeft" >
                  <WebDesign />
                </TabPane>
                <TabPane tab="Oranges 2 Oranges" key="2" className="animated fadeInLeft"><WebDesign />
                </TabPane>
                <TabPane tab="Truck Hunt" key="3" className="animated fadeInLeft">
                <WebDesign />
                </TabPane>
              </Tabs>
            </Element>
          </Timeline.Item>
          <a onClick={this.scrollToTop}><h1 style={{ fontSize: '4em', textAlign: 'center' }}>To the top!</h1></a>
       </Timeline>
    )
  }
}

export default Section;
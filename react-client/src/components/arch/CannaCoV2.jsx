import React from 'react';
import DesignData from '../3dDesignData.js';
import MapView from '../Map.jsx';
import { Tabs, Carousel, Timeline } from 'antd';
import { Col, Panel, Image, ResponsiveEmbed, Button, ListGroup, ListGroupItem, Media } from 'react-bootstrap';

const TabPane = Tabs.TabPane;

const descriptionArr = DesignData.data;


class AppDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0
    }

    this.handleSwipe = this.handleSwipe.bind(this);
  }


  handleSwipe(key) {
    console.log('Inner', key);
    this.setState({
      key
    })
  }

  render () {
    let i = this.state.key;
    let info = descriptionArr[1][i];
    let length = descriptionArr[1].length;
    return (
      <div>
        <Col smHidden md={4}>
          <Panel className='projectDescription'>
              <Media>
               <Media.Left>
                  <img width={64} height={64} src={info.logo} alt="Image"/>
                </Media.Left>
                <Media.Body>
                  <h2>{info.title}</h2>
                </Media.Body>
              </Media>
              { info.team &&
                (<ListGroup fill>
                  <ListGroupItem>
                  <h4 className="textPadd" >Project Description</h4>
                  <h5>{info.description}</h5>
                  </ListGroupItem>
                  <ListGroupItem>
                  <h4 className="textPadd" >Tools + Tech</h4>
                  <h5>{info.tools}</h5>
                  </ListGroupItem>
                  <ListGroupItem>
                   <Media>
                     <Media.Left>
                        <img width={48} height={48} src={info.teamImage} alt="Image"/>
                      </Media.Left>
                      <Media.Body>
                        <h4 className="textPadd" >Team</h4>
                        <h5>{info.team}</h5>
                      </Media.Body>
                    </Media>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MapView coords={[-87.627825, 41.865289]} zoom={14}/>
                  </ListGroupItem>
                </ListGroup>
                )}
                { info.topic &&
                (<ListGroup fill>
                  <ListGroupItem>
                  <h4 className="textPadd" >{info.topic}</h4>
                  <h5>{info.description}</h5>
                  </ListGroupItem>
                  <ListGroupItem>
                  <h4 className="textPadd" >Tools + Tech</h4>
                  <h5>{info.tools}</h5>
                  </ListGroupItem>
                </ListGroup>
                )}
          </Panel>
        </Col>
        <Col xs={12} md={8}>
        <Tabs defaultActiveKey="0" activeKey={(this.state.key).toString()} onChange={this.handleSwipe} tabPosition="top">
          <TabPane tab="Rendering 1" key="0" >
            <Col md={12} >
              <Image src={ info.content } className="imageCenter" responsive rounded />
            </Col>
          </TabPane>
          <TabPane tab="Rendering 2" key="1">
            <Col md={12} >
              <Image src={ info.content } className="imageCenter" responsive rounded />
            </Col>
          </TabPane>
          <TabPane tab="Infographic 1" key="2">
            <Col md={12} >
              <Image src={ info.content } className="imageCenter" responsive rounded />
            </Col>
          </TabPane>
          <TabPane tab="Infographic 2" key="3">
            <Col md={12} >
              <Image src={ info.content } className="imageCenter" responsive rounded />
            </Col>
          </TabPane>
          <TabPane tab="Plans + Sections" key="4">
             <Carousel effect="fade" dots autoplay>
              <div>
                <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/2d3d/CannaCo+v2/section1.jpg" className="imageCenter" responsive />
              </div>
              <div>
                <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/2d3d/CannaCo+v2/section2.jpg" className="imageCenter" responsive />
              </div>
              <div>
                <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/2d3d/CannaCo+v2/plan0.jpg" className="imageCenter" responsive />
              </div>
              <div>
                <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/2d3d/CannaCo+v2/plan1.jpg" className="imageCenter" responsive />
              </div>
              <div>
                <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/2d3d/CannaCo+v2/plan2.jpg" className="imageCenter" responsive />
              </div>
              <div>
                <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/2d3d/CannaCo+v2/ccphoto.jpg" className="imageCenter" responsive />
              </div>
              <div>
                <Image src="https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/2d3d/CannaCo+v2/ccwebsite.png" className="imageCenter" responsive />
              </div>
            </Carousel>
          </TabPane>
        </Tabs>
        </Col>
      </div>
    )
  }
}

export default AppDesign;
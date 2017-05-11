import React from 'react';
import AppDesignData from './3dDesignData.js';
import { Tabs, Carousel, Timeline } from 'antd';
import { Col, Panel, Image, ResponsiveEmbed, Button, ListGroup, ListGroupItem, Media } from 'react-bootstrap';

const TabPane = Tabs.TabPane;

const descriptionArr = AppDesignData.data;


class AppDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0
    }

    this.handleSwipe = this.handleSwipe.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }


  handleSwipe(key) {
    console.log('Inner', key);
    this.setState({
      key
    })
  }

   handleNext() {
    const statePlus = this.state.key + 1;
    this.setState({
      key: statePlus

    })
  }

  render () {
    let i = this.state.key;
    let info = descriptionArr[this.props.project][i];
    let length = descriptionArr[this.props.project].length;
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
          <TabPane tab="Slide 1" key="0" >
            <Col md={12} >
              <Image src={ info.content } className="imageCenter" responsive rounded />
            </Col>
          </TabPane>
          <TabPane tab="Slide 2" key="1">
            <Col md={12} >
              <Image src={ info.content } className="imageCenter" responsive rounded />
            </Col>
          </TabPane>
          { length < 3 ? null :
            (<TabPane tab="Slide 3" key="2">
              <Col md={12} >
                <Image src={ info.content } className="imageCenter" responsive rounded />
              </Col>
            </TabPane>)}
          { length < 4 ? null :
          (<TabPane tab="Slide 4" key="3">
            <Col md={12} >
              <Image src={ info.content } className="imageCenter" responsive rounded />
            </Col>
          </TabPane>)
          }
        </Tabs>
        </Col>
      </div>
    )
  }
}

export default AppDesign;
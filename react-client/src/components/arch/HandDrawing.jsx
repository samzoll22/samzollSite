import React from 'react';
import DesignData from '../3dDesignData.js';
import { Tabs, Carousel, Timeline, Tooltip } from 'antd';
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
    let info = descriptionArr[4][i];
    let length = descriptionArr[4].length;
    return (
      <div>
        <Col xsHidden smHidden md={4}>
          <Panel className='projectDescription'>
              <Media>
               <Media.Left>
                  <img width={64} height={64} src={info.logo} alt="Image"/>
                </Media.Left>
                <Media.Body>
                  <h2>{info.title}</h2>
                  { info.location ? (<h5>{info.location} • {info.date}</h5>) : null}
                </Media.Body>
              </Media>
              { info.team &&
                (<ListGroup fill>
                  <ListGroupItem>
                  <h4 className="textPadd" >Project Description</h4>
                  <h5>{info.description}</h5>
                  </ListGroupItem>
                  <ListGroupItem>
                    <h4 className="textPadd" >Responsibilities</h4>
                    <h5>{info.responsibilities}</h5>
                  </ListGroupItem>
                  <ListGroupItem>
                  <h4 className="textPadd" >Tools + Tech</h4>
                  {info.tools.map((item, i) => {
                        const count = info.tools.length;
                        const size = 100 / count;
                        return (
                        <Tooltip title={item.name} key={i}>
                          <Image className="toolStyle" src={`https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/${item.image}.svg`} alt={item} width={`${size}%`} height={32} />
                        </Tooltip>
                        )
                      })}
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
                  {info.tools.map((item, i) => {
                        const count = info.tools.length;
                        const size = 100 / count;
                        return (
                        <Tooltip title={item.name} key={i}>
                          <Image className="toolStyle" src={`https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/${item.image}.svg`} alt={item} width={`${size}%`} height={32} />
                        </Tooltip>
                        )
                      })}
                  </ListGroupItem>
                </ListGroup>
                )}
          </Panel>
        </Col>
        <Col sm={12} md={8}>
        <Tabs defaultActiveKey="0" activeKey={(this.state.key).toString()} onChange={this.handleSwipe} tabPosition="top">
          <TabPane tab="Axonometric" key="0" >
            <Col md={12} >
              <Image src={ info.content } className="imageCenter" responsive rounded />
            </Col>
          </TabPane>
          <TabPane tab="Perspective" key="1">
            <Col md={12} >
              <Image src={ info.content } className="imageCenter" responsive rounded />
            </Col>
          </TabPane>
        </Tabs>
        </Col>
      </div>
    )
  }
}

export default AppDesign;
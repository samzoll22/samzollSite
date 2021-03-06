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
    let mobile = descriptionArr[0];
    let info = mobile[i];
    let length = descriptionArr[0].length;
    let screenWidth = this.props.width;

    //Set to false now until all 2d/3d components ready for prod
    //screenWidth < 992
    return (
      <div>
        { false ?
        (<Col smHidden md={4}>
          <Tabs defaultActiveKey="0" tabPosition="top" onChange={this.handleSwipe} activeKey={(this.state.key).toString()}>
            <TabPane tab="Rendering" key="0" >
              <Col md={12} >
                <Image src={ mobile[0].content } className="imageCenter" responsive rounded />
              </Col>
            </TabPane>
            <TabPane tab="Process Diagram" key="1">
              <Col md={12} >
                <Image src={ mobile[1].content } className="imageCenter" responsive rounded />
              </Col>
            </TabPane>
            <TabPane tab="Plans" key="2">
              <Col md={12} >
                <Image src={ mobile[2].content } className="imageCenter" responsive rounded />
              </Col>
            </TabPane>
            <TabPane tab="Section" key="3">
              <Col md={12} >
                <Image src={ mobile[3].content } className="imageCenter" responsive rounded />
              </Col>
            </TabPane>
            <TabPane tab="Description" key="4">
              <Panel className='projectDescription'>
                <Media>
                 <Media.Left>
                    <img width={64} height={64} src={mobile[0].logo} alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <h2>{mobile[0].title}</h2>
                    { mobile[0].location && <h5>{mobile[0].location} • {mobile[0].date}</h5>}
                  </Media.Body>
                </Media>
                  <ListGroup fill>
                    <ListGroupItem>
                    <h4 className="textPadd" >Project Summary</h4>
                    <h5>{mobile[0].description}</h5>
                    </ListGroupItem>
                    <ListGroupItem>
                    <h4 className="textPadd" >Responsibilities</h4>
                    <h5>{mobile[0].responsibilities}</h5>
                    </ListGroupItem>
                    <ListGroupItem>
                    <h4 className="textPadd" >Tools + Tech</h4>
                    {mobile[0].tools.map((item, i) => {
                      const count = mobile[0].tools.length;
                      const size = 100 / count;
                      return (
                      <Tooltip title={item.name} key={i}>
                        <Image className="toolStyle" src={`http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/${item.image}.svg`} alt={item} width={`${size}%`} height={32} />
                      </Tooltip>)
                    })}
                    </ListGroupItem>
                    <ListGroupItem>
                     <Media>
                       <Media.Left>
                          <img width={48} height={48} src={mobile[0].teamImage} alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                          <h4 className="textPadd" >Team</h4>
                          <h5>{mobile[0].team}</h5>
                        </Media.Body>
                      </Media>
                    </ListGroupItem>
                  </ListGroup>
              </Panel>
            </TabPane>
          </Tabs>
        </Col>)
      : (<div>
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
                          <Image className="toolStyle" src={`http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/${item.image}.svg`} alt={item} width={`${size}%`} height={32} />
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
                          <Image className="toolStyle" src={`http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/${item.image}.svg`} alt={item} width={`${size}%`} height={32} />
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
            <TabPane tab="Rendering" key="0" >
              <Col md={12} >
                <Image src={ info.content } className="imageCenter" responsive rounded />
              </Col>
            </TabPane>
            <TabPane tab="Process Diagram" key="1">
              <Col md={12} >
                <Image src={ info.content } className="imageCenter" responsive rounded />
              </Col>
            </TabPane>
            <TabPane tab="Plans" key="2">
              <Col md={12} >
                <Image src={ info.content } className="imageCenter" responsive rounded />
              </Col>
            </TabPane>
            <TabPane tab="Section" key="3">
              <Col md={12} >
                <Image src={ info.content } className="imageCenter" responsive rounded />
              </Col>
            </TabPane>
          </Tabs>
          </Col>
        </div>)
      }
    </div>
    )
  }
}

export default AppDesign;
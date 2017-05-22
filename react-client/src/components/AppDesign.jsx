import React from 'react';
import AppDesignData from './AppDesignData.js';
import { Tabs, Carousel, Timeline, Tooltip } from 'antd';
import { Grid, Col, Row, Thumbnail, Panel, Image, ResponsiveEmbed, Button, ButtonGroup, ListGroup, ListGroupItem, Media } from 'react-bootstrap';

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
    let mobile = descriptionArr[this.props.project];
    let info = mobile[i];
    let length = descriptionArr[this.props.project].length;
    let screenWidth = this.props.width;

    let platformSize = '33%';
    if (mobile[0].platforms) {
      if (mobile[0].platforms.length === 3) {
        platformSize = '33%';
      } else if (mobile[0].platforms.length === 2) {
        platformSize = '50%';
      } else if (mobile[0].platforms.length === 1) {
        platformSize = '100%';
      }
    }

    if (this.state.key === 3 && screenWidth > 991) {
      this.setState({
        key: 0
      });
    }
    return (
      <div>
            {screenWidth < 992 ?
            (<Col>
              <Tabs defaultActiveKey="0" onChange={this.handleSwipe} activeKey={(this.state.key).toString()} tabPosition="top">
                <TabPane tab="HomeScreen" key="0" >
                  <Col md={12} >
                    <Image src={ mobile[0].content } className="imageCenter" responsive rounded />
                  </Col>
                </TabPane>
                <TabPane tab="Mockup" key="1">
                  <Col md={12} >
                    <Image src={ mobile[1].content } className="imageCenter" responsive rounded />
                  </Col>
                </TabPane>
                { mobile[2].content.slice(-3) === 'png' ?
                  (<TabPane tab="Mockup 2" key="2">
                      <Col md={12} >
                        <Image src={ mobile[2].content } className="imageCenter" responsive rounded />
                      </Col>
                    </TabPane>)
                  :(<TabPane tab="Mockup 2" key="2">
                      <video width="100%" className="imageCenter" loop controls muted >
                        <source src={ mobile[2].content } type="video/mp4" />
                      </video>
                    </TabPane>)
                }
                <TabPane tab="Description" key="3">
                  <Col md={12} >
                    <Panel className='projectDescription'>
                    <Media>
                     <Media.Left>
                        <img width={64} height={64} src={mobile[0].logo} alt="Image"/>
                      </Media.Left>
                      <Media.Body>
                        <h2>{mobile[0].title}</h2>
                        { mobile[0].location ? (<h5>{mobile[0].location} • {mobile[0].date}</h5>) : null}
                      </Media.Body>
                    </Media>
                    { mobile[0].team &&
                      (<ListGroup fill>
                        <ListGroupItem>
                        <h4 className="textPadd" >Project Description</h4>
                          <h5>{mobile[0].description}</h5>
                        </ListGroupItem>
                        <ListGroupItem>
                          <h4 className="textPadd" >Responsibilities</h4>
                          <h5>{mobile[0].responsibilities}</h5>
                        </ListGroupItem>
                        <ListGroupItem>
                          <h4 className="textPadd" >Platform Links</h4>
                          <ButtonGroup className="center" justified>
                            {mobile[0].platforms.map((item, i) => {
                              return (
                                <a href={item.link} target="_blank" key={i} >
                                  <Button style={{width: platformSize, borderColor: '#fff'}}>
                                      <Image className="platformIcons" src={item.image} alt={item.type} />
                                  </Button>
                                </a>
                              )
                            })}
                          </ButtonGroup>
                        </ListGroupItem>
                        <ListGroupItem>
                        <h4 className="textPadd" >Tools + Tech</h4>
                        {mobile[0].tools.map((item, i) => {
                          const count = mobile[0].tools.length;
                          const size = 100 / count;
                          return (
                          <Tooltip title={item.name} key={i}>
                            <Image className="toolStyle" src={`https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/${item.image}.svg`} alt={item} width={`${size}%`} height={32} />
                          </Tooltip>)
                          })
                        }
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
                      )}
                </Panel>
                  </Col>
                </TabPane>
              </Tabs>
            </Col>)
          : (<div>
              <Col smHidden md={4}>
                <Panel className='projectDescription'>
                    <Media>
                     <Media.Left>
                        <img width={64} height={64} src={mobile[0].logo} alt="Image"/>
                      </Media.Left>
                      <Media.Body>
                        <h2>{mobile[0].title}</h2>
                        { mobile[0].location ? (<h5>{mobile[0].location} • {mobile[0].date}</h5>) : null}
                      </Media.Body>
                    </Media>
                    { mobile[0].team &&
                      (<ListGroup fill>
                        <ListGroupItem>
                        <h4 className="textPadd" >Project Description</h4>
                          <h5>{mobile[0].description}</h5>
                        </ListGroupItem>
                        <ListGroupItem>
                          <h4 className="textPadd" >Responsibilities</h4>
                          <h5>{mobile[0].responsibilities}</h5>
                        </ListGroupItem>
                        <ListGroupItem>
                        <h4 className="textPadd" >Platform Links</h4>
                            <ButtonGroup className="center" justified>
                        {mobile[0].platforms.map((item, i) => {
                          return (
                            <a href={item.link} target="_blank" key={i} >
                              <Button style={{width: platformSize, borderColor: '#fff'}}>
                                  <Image className="platformIcons" src={item.image} alt={item.type} />
                              </Button>
                            </a>
                          )
                        })}
                            </ButtonGroup>
                        </ListGroupItem>
                        <ListGroupItem>
                        <h4 className="textPadd" >Tools + Tech</h4>
                        {mobile[0].tools.map((item, i) => {
                          const count = mobile[0].tools.length;
                          const size = 100 / count;
                          return (
                          <Tooltip title={item.name} key={i}>
                            <Image className="toolStyle" src={`https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/${item.image}.svg`} alt={item} width={`${size}%`} height={32} />
                          </Tooltip>)
                          })
                        }
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
                      )}
                      { mobile[0].topic &&
                      (<ListGroup fill>
                        <ListGroupItem>
                        <h4 className="textPadd" >{mobile[0].topic}</h4>
                        <h5>{mobile[0].description}</h5>
                        </ListGroupItem>
                        <ListGroupItem>
                        <h4 className="textPadd" >Tools + Tech</h4>
                        {mobile[0].tools.map((item, i) => {
                          const count = mobile[0].tools.length;
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
              <Col xs={12} md={8}>
                <Tabs defaultActiveKey="0" onChange={this.handleSwipe} activeKey={(this.state.key).toString()} tabPosition="top">
                  <TabPane tab="HomeScreen" key="0" >
                    <Col md={12} >
                      <Image src={ info.content } className="imageCenter" responsive rounded />
                    </Col>
                  </TabPane>
                  <TabPane tab="Mockup 1" key="1">
                    <Col md={12} >
                      <Image src={ info.content } className="imageCenter" responsive rounded />
                    </Col>
                  </TabPane>
                  { info.content.slice(-3) === 'png' ?
                    (<TabPane tab="Mockup 2" key="2">
                      <Col md={12} >
                        <Image src={ info.content } className="imageCenter" responsive rounded />
                      </Col>
                    </TabPane>)
                  :(<TabPane tab="Mockup 2" key="2">
                      <video width="100%" className="imageCenter" loop controls muted >
                        <source src={ info.content } type="video/mp4" />
                      </video>
                    </TabPane>)
                  }
                </Tabs>
              </Col>
            </div>)
          }
        </div>
    )
  }
}

export default AppDesign;
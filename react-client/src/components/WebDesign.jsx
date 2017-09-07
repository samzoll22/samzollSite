import React from 'react';
import WebDesignData from './WebDesignData.js';
import { Tabs, Carousel, Timeline, Tooltip } from 'antd';
import { Col, Row, Panel, Image, ResponsiveEmbed, Button, ListGroup, ListGroupItem, Media } from 'react-bootstrap';

const TabPane = Tabs.TabPane;

const descriptionArr = WebDesignData.data;


class WebDesign extends React.Component {
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
    let i = this.state.key
    let mobile = descriptionArr[this.props.project];
    let info = mobile[i];
    let length = descriptionArr[this.props.project].length;
    let screenWidth = this.props.width;

    if (this.state.key === 3 && screenWidth > 991) {
      this.setState({
        key: 0
      });
    }
    return (
          <div>
            {screenWidth < 992 ?
            (<Col>
            <Tabs defaultActiveKey="0" tabPosition="top" onChange={this.handleSwipe} activeKey={(this.state.key).toString()}>
              <TabPane tab="Overview" key="0" >
                <Col md={12} >
                  <Image src={ info.content } className="imageCenter" responsive />
                </Col>
              </TabPane>
              {length === 3 &&
                (<TabPane tab="Video" key="1">
                  <video width="100%" className="imageCenter" loop controls muted >
                    <source src={ info.content } type="video/mp4" />
                  </video>
                </TabPane>)
              }
              {length === 4 ? (
                  <TabPane tab="Wireframes" key="1">
                    <Col md={12} >
                      <Image src={ mobile[2].content } className="imageCenter" responsive rounded />
                    </Col>
                  </TabPane>
                )
                :(<TabPane tab="Description" key="2">
                    <Panel className='projectDescription'>
                      <Media>
                       <Media.Left>
                          <img width={64} height={64} src={descriptionArr[this.props.project][0].logo} alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                          <h2>{descriptionArr[this.props.project][0].title}</h2>
                          { descriptionArr[this.props.project][0].location ? (<h5>{descriptionArr[this.props.project][0].location} • {descriptionArr[this.props.project][0].date}</h5>) : null}
                        </Media.Body>
                      </Media>
                      <ListGroup fill>
                        <ListGroupItem>
                        <h4 className="textPadd" >Project Summary</h4>
                        <h5>{descriptionArr[this.props.project][0].description}</h5>
                        </ListGroupItem>
                        <ListGroupItem>
                        <h4 className="textPadd" >Responsibilities</h4>
                        <h5>{descriptionArr[this.props.project][0].responsibilities}</h5>
                        </ListGroupItem>
                        <ListGroupItem>
                        <h4 className="textPadd" >Tools + Tech</h4>
                        {descriptionArr[this.props.project][0].tools.map((item, i) => {
                          const count = descriptionArr[this.props.project][0].tools.length;
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
                              <img width={48} height={48} src={descriptionArr[this.props.project][0].teamImage} alt="Image"/>
                            </Media.Left>
                            <Media.Body>
                              <h4 className="textPadd" >Team</h4>
                              <h5>{descriptionArr[this.props.project][0].team}</h5>
                            </Media.Body>
                          </Media>
                        </ListGroupItem>
                      </ListGroup>
                    </Panel>
                  </TabPane>
                  )}
                  {length === 4 &&
                  (<TabPane tab="Description" key="2">
                    <Panel className='projectDescription'>
                      <Media>
                       <Media.Left>
                          <img width={64} height={64} src={descriptionArr[this.props.project][0].logo} alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                          <h2>{descriptionArr[this.props.project][0].title}</h2>
                          { descriptionArr[this.props.project][0].location ? (<h5>{descriptionArr[this.props.project][0].location} • {descriptionArr[this.props.project][0].date}</h5>) : null}
                        </Media.Body>
                      </Media>
                      <ListGroup fill>
                        <ListGroupItem>
                        <h4 className="textPadd" >Project Summary</h4>
                        <h5>{descriptionArr[this.props.project][0].description}</h5>
                        </ListGroupItem>
                        <ListGroupItem>
                        <h4 className="textPadd" >Responsibilities</h4>
                        <h5>{descriptionArr[this.props.project][0].responsibilities}</h5>
                        </ListGroupItem>
                        <ListGroupItem>
                        <h4 className="textPadd" >Tools + Tech</h4>
                        {descriptionArr[this.props.project][0].tools.map((item, i) => {
                          const count = descriptionArr[this.props.project][0].tools.length;
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
                              <img width={48} height={48} src={descriptionArr[this.props.project][0].teamImage} alt="Image"/>
                            </Media.Left>
                            <Media.Body>
                              <h4 className="textPadd" >Team</h4>
                              <h5>{descriptionArr[this.props.project][0].team}</h5>
                            </Media.Body>
                          </Media>
                        </ListGroupItem>
                      </ListGroup>
                    </Panel>
                  </TabPane>
                  )}
              </Tabs>
            </Col>)
          : (<div>
              <Col smHidden md={4}>
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
            <Col xs={12} md={8}>
            <Tabs defaultActiveKey="0" activeKey={(this.state.key).toString()} onChange={this.handleSwipe} tabPosition="top" >
              <TabPane tab="Overview" key="0" >
                <Col md={12} >
                  <Image src={ info.content } className="imageCenter" responsive />
                </Col>
              </TabPane>
              <TabPane tab="Video" key="1">
                <video width="100%" className="imageCenter" loop controls muted >
                  <source src={ info.content } type="video/mp4" />
                </video>
              </TabPane>
              { length === 4 &&
              (<TabPane tab="Wireframes" key="2">
                <Col md={12} >
                  <Image src={ info.content } className="imageCenter" responsive rounded />
                </Col>
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

export default WebDesign;
import React from 'react';
import { Tabs, Carousel, Timeline } from 'antd';
import { Col, Panel, Image, ResponsiveEmbed, Button } from 'react-bootstrap';

const TabPane = Tabs.TabPane;

const descriptionArr = [
  { title: 'Ticket Champ',
    description: 'Ticket Champ is a ticket price comparison app. When trying to find the best price for tickets, Ticket Champ allows you to search your desired event and compare prices from multiple vendor to find the best priced tickets.',
    image: 'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/ticketChamp/ticket_champ_logo.png',
    content: 'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/ticketChamp/Ticket-Champ-Static.png'},
  { title: 'Ticket Champ',
    description: 'This is a quick gif guided tour.',
    content: 'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/ticketChamp/ticket-champ.gif'},
  { title: 'Ticket Champ',
    description: 'This is a video guided tour.',
    content: 'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/ticketChamp/Ticket+Champ+720p.mp4'
  },
  { title: 'Ticket Champ',
    description: 'This is the wireframe sketch that was converted to a greyscale mockup using Adobe Illustrator',
    content: 'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/ticketChamp/wireframe.png'
  }
]


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
    console.log(key);
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
    let info = descriptionArr[i]
    return (
      <div>
        <Col smHidden md={4}>
          <Panel className='projectDescription'>
            <h2>{info.title}</h2>
            <h5>{info.description}</h5>
            { this.state.key >= 1 ? null : (<Image className='animated fadeIn' src={info.image} responsive />) }
          </Panel>
        </Col>
        <Col xs={12} md={8}>
        <Tabs defaultActiveKey="0" activeKey={(this.state.key).toString()} onChange={this.handleSwipe} tabPosition="top">
          <TabPane tab="HomeScreen" key="0" >
            <Col md={12} >
              <Image src={ info.content } className="imageCenter" responsive rounded />
            </Col>
          </TabPane>
          <TabPane tab="Guided GIF" key="1">
            <Col md={12} >
              <Image src={ info.content } className="imageCenter" responsive rounded />
            </Col>
          </TabPane>
          <TabPane tab="Guided Video" key="2">
            <video height="480" className="imageCenter" loop controls autoplay>
              <source src={ info.content } type="video/mp4" />
            </video>
          </TabPane>
          <TabPane tab="Wireframes" key="3">
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

export default WebDesign;
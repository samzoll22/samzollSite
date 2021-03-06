import React from 'react';
import WebDesign from './WebDesign.jsx';
import { Tabs, Carousel, Timeline } from 'antd';

const TabPane = Tabs.TabPane;

class WebDesignTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0
    }
  this.handleSwipe = this.handleSwipe.bind(this);
  }

  handleSwipe(key) {
    console.log('Outer', key);
    this.setState({
      key
    })
  }

  render () {

    return (
      <Tabs
        defaultActiveKey="0"
        activeKey={(this.state.key).toString()}
        onChange={this.handleSwipe}
        tabPosition='left'
        style={{ height: '100%' }}
        size="small"
      >
        <TabPane tab="Convertly" key="0" className="animated fadeIn" >
          <WebDesign project={this.state.key} width={this.props.width}/>
        </TabPane>
        <TabPane tab="Truck Hunt" key="1" className="animated fadeIn" >
          <WebDesign project={this.state.key} width={this.props.width}/>
        </TabPane>
        <TabPane tab="Oranges 2 Oranges" key="2" className="animated fadeIn">
          <WebDesign project={this.state.key} width={this.props.width}/>
        </TabPane>
        <TabPane tab="Ticket Champ" key="3" className="animated fadeIn">
          <WebDesign project={this.state.key} width={this.props.width}/>
        </TabPane>
        <TabPane tab="Trivia Night" key="4" className="animated fadeIn">
          <WebDesign project={this.state.key} width={this.props.width}/>
        </TabPane>
      </Tabs>
    )
  }
}

export default WebDesignTab;
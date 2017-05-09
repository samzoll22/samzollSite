import React from 'react';
import AppDesign from './AppDesign.jsx';
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
        style={{ height: 600 }}
      >
        <TabPane tab="Lucky North Casino" key="0" className="animated fadeIn" >
          <AppDesign project={this.state.key} />
        </TabPane>
        <TabPane tab="Trivia Monster" key="1" className="animated fadeIn">
          <AppDesign project={this.state.key} />
        </TabPane>
        <TabPane tab="Double Luck Nudge" key="2" className="animated fadeIn">
          <AppDesign project={this.state.key} />
        </TabPane>
        <TabPane tab="Muncher Man" key="3" className="animated fadeIn">
          <AppDesign project={this.state.key} />
        </TabPane>
        <TabPane tab="Trivios" key="4" className="animated fadeIn">
          <AppDesign project={this.state.key} />
        </TabPane>
      </Tabs>
    )
  }
}

export default WebDesignTab;
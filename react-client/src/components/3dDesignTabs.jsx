import React from 'react';
import CanncoV3 from './arch/CannaCoV3.jsx';
import CanncoV2 from './arch/CannaCoV2.jsx';
import CanncoV1 from './arch/CannaCoV1.jsx';
import AAMusicV2 from './arch/AaMusicV2.jsx';
import AAMusicV1 from './arch/AaMusicV1.jsx';
import HandDrawing from './arch/HandDrawing.jsx';
import MaisonDeVerre from './arch/MaisonDeVerre.jsx';
import OpenAir from './arch/OpenAirSchool.jsx';
import UM3D from './arch/UM3D.jsx';
import BobBrobson from './arch/BobBrobson.jsx';
import { Label } from 'react-bootstrap';
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
        <TabPane tab="CannaCo V3" key="0" className="animated fadeIn" >
          <CanncoV3 />
        </TabPane>
        <TabPane tab="CannaCo V2" key="1" className="animated fadeIn" >
          <CanncoV2 />
        </TabPane>
        <TabPane tab="CannaCo V1" key="2" className="animated fadeIn" >
          <CanncoV1 />
        </TabPane>
        <TabPane tab="Music School V2" key="3" className="animated fadeIn" >
          <AAMusicV2 />
        </TabPane>
        <TabPane tab="Music School V1" key="4" className="animated fadeIn" >
          <AAMusicV1 />
        </TabPane>
        <TabPane tab="Hand Drawing" key="5" className="animated fadeIn" >
          <HandDrawing />
        </TabPane>
        <TabPane tab="Maison de Verre" key="6" className="animated fadeIn" >
          <MaisonDeVerre />
        </TabPane>
        <TabPane tab="Open Air School" key="7" className="animated fadeIn" >
          <OpenAir />
        </TabPane>
        <TabPane tab="UM3D Research" key="8" className="animated fadeIn" >
          <UM3D />
        </TabPane>
        <TabPane tab="3D Modeling" key="9" className="animated fadeIn" >
          <BobBrobson />
        </TabPane>
      </Tabs>
    )
  }
}

export default WebDesignTab;
        // <TabPane tab="Ann Arbor Music" key="1" className="animated fadeIn">
        //   <Design3d project={this.state.key} />
        // </TabPane>
        // <TabPane tab="Maison de Verre" key="2" className="animated fadeIn">
        //   <Design3d project={this.state.key} />
        // </TabPane>
        // <TabPane tab="Open Air School" key="3" className="animated fadeIn">
        //   <Design3d project={this.state.key} />
        // </TabPane>
        // <TabPane tab="UM3D Research" key="4" className="animated fadeIn">
        //   <Design3d project={this.state.key} />
        // </TabPane>
        // <TabPane tab="3D Models" key="5" className="animated fadeIn">
        //   <Design3d project={this.state.key} />
        // </TabPane>
        // <TabPane tab="Hand Drawing" key="6" className="animated fadeIn">
        //   <Design3d project={this.state.key} />
        // </TabPane>
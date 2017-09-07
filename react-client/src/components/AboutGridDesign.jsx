import React from 'react';
import { Well, Button, Grid, Col, Row, Image, Media } from 'react-bootstrap';
import { Tooltip } from 'antd';

const data = [
  {
    name:'3D Printing',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/3d_printing.svg'
  },
  {
    name:'CNC Routing',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/cnc_router.svg'
  },
  {
    name:'Laser Cutting',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/laser_cutter.svg'
  },
  {
    name:'Carpentry',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/carpentry.svg'
  },
  {
    name:'Welding',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/welding.svg'
  },
  {
    name:'Robotics',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/robots.svg'
  },
   {
    name:'Photoshop',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/photoshop.svg'
  },
  {
    name:'Illustrator',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/illustrator.svg'
  },
   {
    name:'InDesign',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/indesign.svg'
  },
  {
    name:'After Effects',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/after_effects.svg'
  },
  {
    name:'Premier',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/premier.svg'
  },
  {
    name:'Sketch',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/sketch.svg'
  },
  {
    name:'Rhinoceros',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/rhino.svg'
  },
  {
    name:'V-Ray',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/vray.svg'
  },
   {
    name:'Final Cut Pro',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/final_cut_pro.svg'
  },
  {
    name:'SketchUp',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/sketchup.svg'
  },
  {
    name:'AutoCAD',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/autocad.svg'
  },
  {
    name:'Revit',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/revit.svg'
  }
]

const AboutGrid = (props) => {
  return (
    <div>
    {props.width > 991 ? (
      <Col sm={12} md={12}>
          {data.map((item, i) => {
            return (
              <Col xs={4} className="center" key={i} style={{ paddingBottom: '3em'}}>
                <Media>
                 <Media.Left>
                    <Tooltip title={item.name}>
                      <Image src={item.image} height={32} width={32}/>
                    </Tooltip>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading><h5>{item.name}</h5></Media.Heading>
                  </Media.Body>
                </Media>
              </Col>
            )
          })}
      </Col>
    )
    :(
      <Col sm={12} md={12}>
          {data.map((item, i) => {
            return (
              <Col xs={4} className="center" key={i} style={{ paddingBottom: '3em'}}>
                <Tooltip title={item.name}>
                  <Image src={item.image} height={32} width={32}/>
                </Tooltip>
              </Col>
            )
          })}
      </Col>
    )}
    </div>
  )
}

export default AboutGrid;
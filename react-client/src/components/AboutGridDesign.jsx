import React from 'react';
import { Well, Button, Grid, Col, Row, Image, Media } from 'react-bootstrap';
import { Tooltip } from 'antd';

const data = [
  {
    name:'3D Printing',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/3d_printing.svg'
  },
  {
    name:'CNC Routing',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/cnc_router.svg'
  },
  {
    name:'Laser Cutting',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/laser_cutter.svg'
  },
  {
    name:'Carpentry',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/carpentry.svg'
  },
  {
    name:'Welding',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/welding.svg'
  },
  {
    name:'Robotics',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/robots.svg'
  },
   {
    name:'Photoshop',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/photoshop.svg'
  },
  {
    name:'Illustrator',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/illustrator.svg'
  },
   {
    name:'InDesign',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/indesign.svg'
  },
  {
    name:'After Effects',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/after_effects.svg'
  },
  {
    name:'Premier',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/premier.svg'
  },
  {
    name:'Sketch',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/sketch.svg'
  },
  {
    name:'Rhinoceros',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/rhino.svg'
  },
  {
    name:'V-Ray',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/vray.svg'
  },
   {
    name:'Final Cut Pro',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/final_cut_pro.svg'
  },
  {
    name:'SketchUp',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/sketchup.svg'
  },
  {
    name:'AutoCAD',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/autocad.svg'
  },
  {
    name:'Revit',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/revit.svg'
  }
]

const AboutGrid = (props) => {
  return (
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
}

export default AboutGrid;
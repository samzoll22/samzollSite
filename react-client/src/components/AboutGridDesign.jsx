import React from 'react';
import { Well, Button, Grid, Col, Row, Image, Media } from 'react-bootstrap';
import { Tooltip } from 'antd';

const data = [
  {
    name:'3D Printing',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/3d_printing.svg'
  },
  {
    name:'CNC Routing',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/cnc_router.svg'
  },
  {
    name:'Laser Cutting',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/laser_cutter.svg'
  },
  {
    name:'Carpentry',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/carpentry.svg'
  },
  {
    name:'Welding',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/welding.svg'
  },
  {
    name:'Robotics',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/robots.svg'
  },
   {
    name:'Photoshop',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/photoshop.svg'
  },
  {
    name:'Illustrator',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/illustrator.svg'
  },
   {
    name:'InDesign',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/indesign.svg'
  },
  {
    name:'After Effects',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/after_effects.svg'
  },
  {
    name:'Premier',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/premier.svg'
  },
  {
    name:'Sketch',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/sketch.svg'
  },
  {
    name:'Rhinoceros',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/rhino.svg'
  },
  {
    name:'V-Ray',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/vray.svg'
  },
   {
    name:'Final Cut Pro',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/final_cut_pro.svg'
  },
  {
    name:'SketchUp',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/sketchup.svg'
  },
  {
    name:'AutoCAD',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/autocad.svg'
  },
  {
    name:'Revit',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/design_logos/revit.svg'
  }
]

const AboutGrid = (props) => {
  return (
    <Col sm={12} md={12}>
        {data.map((item, i) => {
          return (
            <Col xs={4} className="center" key={i} style={{'padding-bottom': '3em'}}>
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
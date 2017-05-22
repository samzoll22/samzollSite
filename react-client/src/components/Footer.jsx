import React from 'react';
import { Tooltip } from 'antd';
import { Jumbotron, Col, Row, Image, Glyphicon, Well } from 'react-bootstrap';

const developementTools = [
  {
    name: 'React',
    image: 'react'
  },
  {
    name: 'Node.JS',
    image: 'node'
  },
  {
    name: 'Express',
    image: 'express'
  },
  {
    name: 'Ant-D',
    image: 'antd'
  },
  {
    name: 'Bootstrap',
    image: 'bootstrap'
  },
  {
    name: 'HTML5',
    image: 'html'
  },
  {
    name: 'CSS3',
    image: 'css'
  },
  {
    name: 'Heroku',
    image: 'heroku'
  },
  {
    name: 'Illustrator',
    image: 'illustrator'
  },
  {
    name: 'Photoshop',
    image: 'photoshop'
  },
  {
    name: 'Pencil',
    image: 'pencil'
  },
  {
    name: 'Paper',
    image: 'paper'
  },
  {
    name: 'iPhone 7 Plus',
    image: 'iphone'
  }
]

const Footer = (props) => {

  return (
  <div className="center footer">
    <h3 className="footerText">
      Designed and Developed by Sam Zoll © 2017
    </h3>
    <p className="footerSubtext">
      This site was built with the tools listed below.
    </p>
    <Col sm={10} smOffset={1}>

        {developementTools.map((item, i) => {
          const count = developementTools.length;
          const size = 100 / count;
          return (
          <Tooltip title={item.name} key={i}>
            <Image className="toolStyle" src={`https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/${item.image}.svg`} alt={item} width={`${size}%`} height={32} />
          </Tooltip>)
          })
        }
    </Col>
  </div>
  )
}
export default Footer;
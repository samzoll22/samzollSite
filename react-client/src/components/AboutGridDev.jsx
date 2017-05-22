import React from 'react';
import { Well, Button, Grid, Col, Row, Image, Media } from 'react-bootstrap';
import { Tooltip } from 'antd';

const data = [
  {
    name:'HTML',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/html.svg'
  },
  {
    name:'CSS',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/css.svg'
  },
  {
    name:'Javascript',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/javascript.svg'
  },
  {
    name:'Node',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/node.svg'
  },
  {
    name:'Express',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/express.svg'
  },
  {
    name:'mySQL',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/mysql.svg'
  },
   {
    name:'React',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/react.svg'
  },
  {
    name:'Redux',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/redux.svg'
  },
   {
    name:'PostgreSQL',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/postgresql.svg'
  },
  {
    name:'Angular',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/angular.svg'
  },
  {
    name:'jQuery',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/jquery.svg'
  },
  {
    name:'Socket.io',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/socketio.svg'
  },
  {
    name:'Bootstrap',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/bootstrap.svg'
  },
  {
    name:'Material UI',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/material.svg'
  },
   {
    name:'Semantic UI',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/semantic.svg'
  },
  {
    name:'D3',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/d3.svg'
  },
  {
    name:'Github',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/git.svg'
  },
  {
    name:'AWS',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/tool-icons/aws.svg'
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
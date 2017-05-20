import React from 'react';
import { Well, Button, Grid, Col, Row, Image, Media } from 'react-bootstrap';
import { Tooltip } from 'antd';

const data = [
  {
    name:'HTML',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/html.svg'
  },
  {
    name:'CSS',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/css.svg'
  },
  {
    name:'Javascript',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/javascript.svg'
  },
  {
    name:'Node',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/node.svg'
  },
  {
    name:'Express',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/express.svg'
  },
  {
    name:'mySQL',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/mysql.svg'
  },
   {
    name:'React',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/react.svg'
  },
  {
    name:'Redux',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/redux.svg'
  },
   {
    name:'PostgreSQL',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/postgresql.svg'
  },
  {
    name:'Angular',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/angular.svg'
  },
  {
    name:'jQuery',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/jquery.svg'
  },
  {
    name:'Socket.io',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/socketio.svg'
  },
  {
    name:'Bootstrap',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/bootstrap.svg'
  },
  {
    name:'Material UI',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/material.svg'
  },
   {
    name:'Semantic UI',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/semantic.svg'
  },
  {
    name:'D3',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/d3.svg'
  },
  {
    name:'Github',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/git.svg'
  },
  {
    name:'AWS',
    image:'https://s3-us-west-1.amazonaws.com/zollstorage/portfolio/developer_logos/aws.svg'
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
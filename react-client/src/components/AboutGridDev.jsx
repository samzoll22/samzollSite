import React from 'react';
import { Well, Button, Grid, Col, Row, Image, Media } from 'react-bootstrap';
import { Tooltip } from 'antd';

const data = [
  {
    name:'HTML',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/html.svg'
  },
  {
    name:'CSS',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/css.svg'
  },
  {
    name:'Javascript',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/javascript.svg'
  },
  {
    name:'Node',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/node.svg'
  },
  {
    name:'Express',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/express.svg'
  },
  {
    name:'mySQL',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/mysql.svg'
  },
   {
    name:'React',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/react.svg'
  },
  {
    name:'Redux',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/redux.svg'
  },
   {
    name:'PostgreSQL',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/postgresql.svg'
  },
  {
    name:'Angular',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/angular.svg'
  },
  {
    name:'jQuery',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/jquery.svg'
  },
  {
    name:'Socket.io',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/socketio.svg'
  },
  {
    name:'Bootstrap',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/bootstrap.svg'
  },
  {
    name:'Material UI',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/material.svg'
  },
   {
    name:'Semantic UI',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/semantic.svg'
  },
  {
    name:'D3',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/d3.svg'
  },
  {
    name:'Github',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/git.svg'
  },
  {
    name:'AWS',
    image:'http://dhmyyrxmn8ugc.cloudfront.net/portfolio/tool-icons/aws.svg'
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
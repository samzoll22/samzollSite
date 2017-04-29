import React from 'react';
const image = require('./assets/images/ryan_cheer.gif')
console.log(image); // '/build/12as7f9asfasgasg.jpg'

function ImageComponent() {
  return (
    <img src={image} />
  )
}

export default ImageComponent;
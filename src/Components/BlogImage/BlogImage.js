import React from 'react';
import { Row } from 'antd';

const BlogImage = (props) => {
  return (
    <Row>
      <br/>
      <img alt="" src={props.href} />
      <br/>
      <br/>
      <i> {props.description} </i>
    </Row>
  )
}

export default BlogImage;
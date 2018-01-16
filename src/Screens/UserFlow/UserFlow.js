import React, { Component } from 'react';
import { Layout } from 'antd';
import CreateBlog from '../CreateBlog';
import Blogs from '../Blogs';
const { Content } = Layout;



class UserFlow extends Component {

  render() {
    return (
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          <CreateBlog />
          <hr />
          <Blogs />
        </div>
      </Content>
    )
  }
}

export default UserFlow;
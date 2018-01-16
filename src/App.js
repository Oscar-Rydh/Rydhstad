import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './App.css';
import { connect } from 'react-redux'
import { updateCurrentUser } from './Store/Actions/CurrentUser/action_creators'
import { Tabs } from 'antd';
import UserFlow from './Screens/UserFlow';
const TabPane = Tabs.TabPane;
const { Header, Footer, Sider } = Layout;

class App extends Component {
  

  render() {
    return (
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="0"  > 
              <span className="nav-text">Meny</span>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">Bloggar</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} >
            <h1 style={{ textAlign: 'center' }}> Welcome to Rydhstad </h1>
          </Header>
          <Tabs defaultActiveKey="oscar" onChange={(selectedUser) => this.props.onCurrentUserChange(selectedUser)} style={{ textAlign: 'center', tabSize: 20}} size={'large'}>
            <TabPane tab="Oscar" key="oscar" ><UserFlow /></TabPane>
            <TabPane tab="Amanda" key="amanda"><UserFlow /></TabPane>
          </Tabs>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
        </Footer>
        </Layout>
      </Layout>
    );
  }
}


function mapDispatchToProps (dispatch) {
  return {
    onCurrentUserChange: selectedUser => {
      dispatch(updateCurrentUser(selectedUser))
    }
  }
}

export default connect(null, mapDispatchToProps)(App);

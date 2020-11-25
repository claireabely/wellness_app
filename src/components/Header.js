import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class HeaderDemo extends Component {
  render() {
    return (
      
      <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Store Menus</Menu.Item>
        <Menu.Item key="3">Past Orders</Menu.Item>
      </Menu>
       
        </Header>
   
  </Layout>
    )
  }
}

export default HeaderDemo
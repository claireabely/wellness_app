import React from 'react'

import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class AppMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.props.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Food
          </Menu.Item>
          <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
            Cart
          </Menu.Item>
          <Menu.Item key="3" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Past">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Favorite">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default AppMenu;
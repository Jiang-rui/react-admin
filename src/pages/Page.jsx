import React, { Component } from 'react';
import { Layout } from 'antd';
import AsyncLoading from '../components/AsyncLoad/asyncLoad'
const { Header, Footer, Sider, Content } = Layout;

const SiderMenu = AsyncLoading(() => import('./siderMenu'))
const HeaderBar = AsyncLoading(() => import('./headerBar.jsx'))
const ContentRouter = AsyncLoading(() => import('../router/router'))

export default class Page extends Component {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '700px' }}>
        <Sider
          collapsible
          trigger={null}
          collapsed={collapsed}
        >
          <div className="side-menu-title"></div>
          <SiderMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 16px' }}>
            <HeaderBar collapsed={collapsed} onToggle={this.toggle} />
          </Header>
          <Content>
            <ContentRouter />
          </Content>
          <Footer style={{ textAlign: 'center' }}>React-Admin ©{new Date().getFullYear()}</Footer>
        </Layout>
        <style>
          {
            `
            .side-menu-title{
              width: 60%;
              height: 26px;
              text-align: center;
              margin: 30px 0 30px 20%;
              border: 2px solid #666;
            }
            `
          }
        </style>
      </Layout>
    );
  }
}
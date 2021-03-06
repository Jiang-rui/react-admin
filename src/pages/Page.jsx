/**
 * 顶级router
 */
import React, { Component, useState } from 'react';
import { Layout } from 'antd';
import AsyncLoading from '../components/AsyncLoad/asyncLoad'

const { Header, Footer, Sider, Content } = Layout;
const SiderMenu = AsyncLoading(() => import('./siderMenu'))
const HeaderBar = AsyncLoading(() => import('./headerBar.jsx'))
const CRouter = AsyncLoading(() => import('./CRouter.jsx'));

export default function Page() {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }
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
          <HeaderBar collapsed={collapsed} onToggle={toggle} />
        </Header>
        <Content>
          <CRouter />
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
            background-color: #555;
          }
          .ant-layout-content{
            min-height:700px;
            position:relative;
          }
          `
        }
      </style>
    </Layout>
  );
}
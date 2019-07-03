import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, } from 'antd';
import { routerLink } from '../router/config';
const { SubMenu } = Menu;
export default class SiderMenu extends Component {
  render() {
    return (
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
      >
        {
          routerLink.map((router, index) => {
            let menu = '';
            if (router.subMenu && router.subMenu.length > 0) {
              let menuList = router.subMenu.map((subRouter, subIndex) => (
                <Menu.Item key={subRouter.Link}>
                  <Link to={subRouter.Link}>
                    <span>{subRouter.name}</span>
                  </Link>
                </Menu.Item>
              ))
              menu = <SubMenu
                key={router.name}
                title={
                  <span>
                    <Icon type={router.icon} />
                    <span>{router.name}</span>
                  </span>
                }
              >{menuList}</SubMenu>
            } else {
              menu = <Menu.Item key={router.Link}>
                <Link to={router.name}>
                  <Icon type={router.icon} />
                  <span>{router.name}</span>
                </Link>
              </Menu.Item>
            }
            return menu;
          })
        }
        {/* <Menu.Item key="1">
          <Link to="/">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>Option 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="inbox" />
          <span>Option 3</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu> */}
      </Menu>
    )
  }
}
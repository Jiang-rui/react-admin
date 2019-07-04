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
                <Link to={router.Link}>
                  <Icon type={router.icon} />
                  <span>{router.name}</span>
                </Link>
              </Menu.Item>
            }
            return menu;
          })
        }
      </Menu>
    )
  }
}
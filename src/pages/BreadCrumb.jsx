/**
 * 面包屑组件
 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { Config } from './breadConfig.js';

class BreadcrumbCustom extends Component {
  state = {
    breads: []
  }
  componentDidMount() {
    const { location: { pathname } = {} } = this.props;
    Config.map(configItem => {
      if (configItem.path === pathname) {
        console.log(configItem.breads)
        this.setState({
          breads: configItem.breads
        })
      }
    })
  }
  render() {
    const { breads } = this.state;
    return (
      <Breadcrumb separator="/">
        <Breadcrumb.Item> <Link to="/page">首页</Link></Breadcrumb.Item>
        {
          breads && breads.length > 0 && breads.map(bread => {
            let breadcrumbItem = ''
            if (Object.prototype.toString.call(bread) === '[object Object]') {
              breadcrumbItem = <Breadcrumb.Item key={bread.to}> <Link to={bread.to}>{bread.name}</Link></Breadcrumb.Item>
            } else {
              breadcrumbItem = <Breadcrumb.Item>{bread.name}</Breadcrumb.Item>
            }
            return breadcrumbItem;
          })
        }

        <style>
          {
            `
            .ant-breadcrumb{
              margin: 20px;
            }
            `
          }
        </style>

      </Breadcrumb>
    );
  }
}
export default withRouter(BreadcrumbCustom);
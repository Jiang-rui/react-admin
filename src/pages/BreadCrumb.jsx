/**
 * 面包屑组件
 */
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { Config } from './breadConfig.js';

function BreadcrumbCustom(props) {
  const [breads, setBreads] = useState([])
  useEffect(() => {
    const { location: { pathname } = {} } = props;
    Config.map(configItem => {
      if (configItem.path === pathname) {
        setBreads(configItem.breads)
      }
    })
  })
  return (
    <Breadcrumb separator="/">
      <Breadcrumb.Item> <Link to="/page">首页</Link></Breadcrumb.Item>
      {
        breads && breads.length > 0 && breads.map(bread => {
          let breadcrumbItem = ''
          if (Object.prototype.toString.call(bread) === '[object Object]') {
            breadcrumbItem = <Breadcrumb.Item key={bread.name}> <Link to={bread.to}>{bread.name}</Link></Breadcrumb.Item>
          } else {
            breadcrumbItem = <Breadcrumb.Item key={bread.name}>{bread.name}</Breadcrumb.Item>
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

export default withRouter(BreadcrumbCustom);
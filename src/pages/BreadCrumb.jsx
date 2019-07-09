/**
 * 面包屑组件
 */
import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

// const { BreadcrumbItem } = Breadcrumb
export default class BreadcrumbCustom extends Component {
  render() {
    const { first, second, thread } = this.props;
    return (
      <Breadcrumb separator="/">
        {first ? <Breadcrumb.Item>{first}</Breadcrumb.Item> : ''}
        {second ? <Breadcrumb.Item>{second}</Breadcrumb.Item> : ''}
        {thread ? <Breadcrumb.Item>{thread}</Breadcrumb.Item> : ''}
        <style>
          {
            `
            .ant-breadcrumb{
              margin:20px 0 0 20px;
            }
            `
          }
        </style>

      </Breadcrumb>
    );
  }
}
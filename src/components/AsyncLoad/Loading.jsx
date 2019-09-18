// 路由组件加载的过场动画组件
import React, { Component } from 'react';
import { Spin } from 'antd';
// import bodymovin from 'bodymovin';
import './load.less'

export default function Loading(props) {
  const { spinning = true } = props;
  return (
    <div className="loading_wrapper">
      <Spin spinning={spinning} size="large" tip="Loading..." />
    </div>
  )

}
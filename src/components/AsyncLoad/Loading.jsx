// 路由组件加载的过场动画组件
import React, { Component } from 'react';
import { Spin } from 'antd';
// import bodymovin from 'bodymovin';
import './load.less'

export default class Loading extends Component {
  componentDidMount() {
  }
  render() {
    const { spinning = true } = this.props;
    return (
      <div className="loading_wrapper">
        <Spin spinning={spinning} size="large" tip="Loading..." />
      </div>
    )
  }
}
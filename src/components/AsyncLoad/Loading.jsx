import React, { Component } from 'react';
import { Spin, Alert } from 'antd';
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
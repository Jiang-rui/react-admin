import React, { Component } from 'react';
import screenfull from 'screenfull';
import { Menu, Dropdown, Icon } from 'antd';
import img from '../imgs/1.jpg';
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        查看个人信息
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com">
        更换头像
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);
export default class HeaderBar extends Component {
  state = {
    showMask: false,
    fullScreen: false
  }
  togglePhoto = () => {
    const { showMask } = this.state;
    this.setState({
      showMask: !showMask
    })
  }
  FullScreenToggle = () => {
    const { fullScreen } = this.state;
    this.setState({
      fullScreen: !fullScreen
    })
    screenfull.toggle()
  }
  render() {
    const { collapsed, onToggle } = this.props;
    const { showMask, fullScreen } = this.state;
    return (
      <React.Fragment>
        <Icon style={{ fontSize: '20px'}} onClick={onToggle} type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        <Icon style={{ fontSize: '20px', position: 'absolute', right: '90px', top: '24px' }} onClick={this.FullScreenToggle} type={fullScreen ? 'fullscreen-exit' : 'fullscreen'} />
        <div className="avatar-box">
          <Dropdown overlay={menu}>
            <img onClick={this.togglePhoto} src={img} alt="头像" />
          </Dropdown>
        </div>
        {
          showMask ? (<div onClick={this.togglePhoto} className="mask-box"><img src={img} /></div>) : ''
        }
        <style>
          {
            `
            .avatar-box{
              width:40px;
              height:40px;
              float:right;
              margin-top:12px;
              border-radius:50%;
              border:1px solid #eee;
              font-size:14px;
              line-height:40px;
              text-align:center;
              cursor:pointer;
            }
            .avatar-box img{
              width:40px;
              height:40px;
              border-radius:50%;
            }
            .img-upload{
              width:40px;
              height:40px;
              opacity:0;
              position:absolute;
              top:0;
              left:0;
            }
            .mask-box{
              position:fixed;
              width:100%;
              height:100%;
              top:0;
              left:0;
              background:rgba(0,0,0,0.6);
            }
            .mask-box img{
              width:400px;
              position:absolute;
              top:50%;
              left:50%;
              transform:translate(-50%,-50%);
            }
            `
          }
        </style>
      </React.Fragment>
    )
  }
}
/**
 * 头部内容
 */
import React, { Component } from 'react';
import screenfull from 'screenfull';
import { Menu, Dropdown, Icon } from 'antd';
import img from '../imgs/1.jpg';
// const menu = (

// );

export default class HeaderBar extends Component {
  state = {
    showMask: false,
    fullScreen: false,
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
  logOut = () => {
    alert("您已退出登录！")
  }
  getMenu = () => {
    return (<Menu>
      <Menu.Item>
        <p rel="noopener noreferrer" >
          个人信息
      </p>
      </Menu.Item>
      <Menu.Item>
        <p rel="noopener noreferrer" >
          更改密码
      </p>
      </Menu.Item>
      <Menu.Item>
        <p rel="noopener noreferrer" >
          设置
      </p>
      </Menu.Item>
      <Menu.Item>
        <p rel="noopener noreferrer" onClick={this.logOut}>
          退出登录
      </p>
      </Menu.Item>
    </Menu>)
  }
  render() {
    const { collapsed, onToggle } = this.props;
    const { showMask, fullScreen } = this.state;
    return (
      <React.Fragment>
        <Icon style={{ fontSize: '20px' }} onClick={onToggle} type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        <Icon style={{ fontSize: '20px', position: 'absolute', right: '90px', top: '24px' }} onClick={this.FullScreenToggle} type={fullScreen ? 'fullscreen-exit' : 'fullscreen'} />
        <div className="avatar-box">
          <Dropdown overlay={this.getMenu}>
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
              z-index:9999;
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
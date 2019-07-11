import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import logincss from './login.module.less';
class Login extends Component {
  componentDidMount() {

  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        const { history } = this.props;
        history.push('/page/index');
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={logincss.login}>
        <Form.Item>
          <h2 className={logincss.title}>管理平台</h2>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '用户名不能为空!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码不能为空!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
          <a className={logincss.login_form_forgot} href="javascript:;">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className={logincss.login_form_button}>
            登录
          </Button>
          Or <a href="javascript:;">现在去注册!</a>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create({ name: 'login' })(Login);
/*
注册组件
 */
import React, {Component} from 'react'
import {NavBar, List, WingBlank, WhiteSpace, InputItem, Button, Radio} from 'antd-mobile'

import Logo from '../../components/logo/logo'

const Item = List.Item

export default class Register extends Component {
  render() {
    return (
      <div>
        <NavBar>用户注册</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名'>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码'>密码:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入确认密码'>确认密码:</InputItem>
            <WhiteSpace/>
            <List.Item>
              <span>用户类型: </span>&nbsp;&nbsp;
              <Radio>大神</Radio>&nbsp;&nbsp;&nbsp;
              <Radio>老板</Radio>
            </List.Item>
            <WhiteSpace/>
            <Button type='primary'>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button>已有账户</Button>

          </List>
        </WingBlank>

      </div>
    )
  }
}
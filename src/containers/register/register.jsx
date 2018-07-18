/*
注册组件
 */
import React, {Component} from 'react'
import {NavBar, List, WingBlank, WhiteSpace, InputItem, Button, Radio} from 'antd-mobile'
import {reqRegister} from '../../api'

import Logo from '../../components/logo/logo'

// const Item = List.Item

export default class Register extends Component {

  // 定义初始化状态
  state = {
    username: '',
    password: '',
    password2: '',
    type: 'dashen'  // laoban
  }

  /*xxx = (val) => {
    this.setState({
      username: val
    })
  }
  yyy = (val) => {
    this.setState({
      password: val
    })
  }*/

  handleChange = (name, val) => {
    this.setState({
      [name]: val  // 属性名是name的值, 而是name本身
    })
  }

  register = () => {
    console.log(this.state)
    reqRegister(this.state).then(response => {
      const result = response.data // {code: 0/1, data/msg: value}
      if(result.code===0) {// 成功了
        console.log(result.data)
        alert('注册成功')
      } else { // 失败
        alert(result.msg)
      }
    })
  }

  goLogin = () => {
    //跳转到登陆的路由
    this.props.history.replace('/login')
  }

  render() {
    const {type} = this.state
    return (
      <div>
        <NavBar>用户注册</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名' onChange={val=> this.handleChange('username', val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码' onChange={val=> this.handleChange('password', val)}>密码:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入确认密码' onChange={val=> this.handleChange('password2', val)}>确认密码:</InputItem>
            <WhiteSpace/>
            <List.Item>
              <span>用户类型: </span>&nbsp;&nbsp;
              <Radio checked={type==='dashen'} onChange={() => this.handleChange('type', 'dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='laoban'} onChange={() => this.handleChange('type', 'laoban')}>老板</Radio>
            </List.Item>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
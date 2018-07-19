/*
登陆组件
 */
import React, {Component} from 'react'
import {NavBar, List, WingBlank, WhiteSpace, InputItem, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from '../../redux/actions'
import Logo from '../../components/logo/logo'

class Login extends Component {

  // 定义初始化状态
  state = {
    username: '',
    password: '',
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val  // 属性名是name的值, 而是name本身
    })
  }

  login = () => {
    this.props.login(this.state)
    //login(this.state)
  }

  goRegister = () => {
    //跳转到登陆的路由
    this.props.history.replace('/register')
  }

  render() {
    const {msg, redirectTo} = this.props.user
    if(redirectTo) {
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar>用户登陆</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <p className='error-msg'>{msg}</p>
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名' onChange={val=> this.handleChange('username', val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码' onChange={val=> this.handleChange('password', val)}>密码:</InputItem>

            <WhiteSpace/>
            <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;陆</Button>
            <WhiteSpace/>
            <Button onClick={this.goRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {login}
)(Login)

/*
a = a + 3
a.xx
a()
fn(a)
{xx:a}
 */
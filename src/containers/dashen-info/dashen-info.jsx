/*
大神的信息完善路由组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, WingBlank, InputItem, List, Button, TextareaItem} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import HeaderSelector from '../../components/header-selector/header-selector'
import {updateUser} from '../../redux/actions'

class DashenInfo extends Component {
  state = {
    header: '',
    post: '',
    info: '',
  }

  setHeader = (header) => {
    this.setState({
      header
    })
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  save = () => {
    this.props.updateUser(this.state)
  }

  render () {

    const {header, type} = this.props.user
    if(header) { // 用户信息已完善
      return <Redirect to='/dashen'/>
    }

    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <WingBlank>
          <List>
            <InputItem placeholder="请输入求职岗位:" onChange={val => this.handleChange('post', val)}>求职岗位: </InputItem>
            <TextareaItem title='个人介绍:' rows={3} onChange={val => this.handleChange('info', val)}/>
            <Button type='primary' onClick={this.save}>保存</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {updateUser}
)(DashenInfo)
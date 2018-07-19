/*
老板的信息完善路由组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, WingBlank, InputItem, List, Button, TextareaItem} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import HeaderSelector from '../../components/header-selector/header-selector'
import {updateUser} from '../../redux/actions'

class LaobanInfo extends Component {

  state = {
    header: '',
    post: '',
    company: '',
    info: '',
    salary: ''
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
      return <Redirect to='/laoban'/>
    }
    return (
      <div>
        <NavBar>老板信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <WingBlank>
          <List>
            <InputItem placeholder="请输入招聘职位" onChange={val => this.handleChange('post', val)}>招聘职位: </InputItem>
            <InputItem placeholder="请输入公司名称" onChange={val => this.handleChange('company', val)}>公司名称: </InputItem>
            <InputItem placeholder="请输入职位薪资" onChange={val => this.handleChange('salary', val)}>职位薪资: </InputItem>
            <TextareaItem title="职位要求:" rows={3} onChange={val => this.handleChange('info', val)}/>

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
)(LaobanInfo)
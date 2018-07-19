import React, {Component} from 'react'
import {Button} from 'antd-mobile'
/*
404组件
 */
export default class NotFound extends Component {
  render () {
    return (
      <div>
        <p>找不到对应的界面</p>
        <Button type='primary' onClick={() => this.props.history.replace('/')}>回到首页</Button>
      </div>
    )
  }
}
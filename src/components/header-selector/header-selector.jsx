/*
用户头像选择的组件
 */
import React, {Component} from 'react'
import {List, Grid} from 'antd-mobile'
import xxx from './imgs/头像1.png'

export default class HeaderSelector extends Component {
  render () {

    const headerList = []
    for (var i = 0; i < 20; i++) {
      const text = '头像'+(i+1)
      headerList.push({
        text,
        icon: require(`./imgs/${text}.png`)
      })
    }

    const header = '请选择头像:'
    return (
      <List renderHeader={() => header}>
        <Grid columnNum={5}
              onClick={this.selectHeader}
              data={headerList}/>
      </List>
    )
  }
}
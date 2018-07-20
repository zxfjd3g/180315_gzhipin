/*
用户头像选择的组件
 */
import React, {Component} from 'react'
import {List, Grid} from 'antd-mobile'
import PropTypes from 'prop-types'
// import xxx from './imgs/头像1.png'

export default class HeaderSelector extends Component {

  static propTypes = {
    setHeader: PropTypes.func.isRequired
  }

  state = {
    icon: null // 需要显示的图片对象
  }

  selectHeader = ({text, icon}) => {
    // 更新父状态, 保存头像名
    this.props.setHeader(text)
    // 保存头像图片对象
    this.setState({icon})
  }

  constructor (props) {
    super(props)
    this.headerList = []
    for (var i = 0; i < 20; i++) {
      const text = '头像'+(i+1)
      this.headerList.push({
        text,
        icon: require(`../../assets/imgs/${text}.png`)
      })
    }
  }

  render () {
    const {icon} = this.state
    // debugger
    const header = icon ? <span>已选择头像: <img src={icon}/></span>: '请选择头像:'
    return (
      <List renderHeader={() => header}>
        <Grid columnNum={5}
              onClick={this.selectHeader}
              data={this.headerList}/>
      </List>
    )
  }
}

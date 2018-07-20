/*
主界面的底部导航
 */
import React, {Component} from 'react'
import {TabBar} from 'antd-mobile'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class NavFooter extends Component {

  static propTypes = {
    navList: PropTypes.array.isRequired
  }

  render() {
    const navList = this.props.navList.filter(nav => !nav.hide)
    // 只有路由组件才能路由相关属性
    const path = this.props.location.pathname
    // 根据数据的数组生成标签的数组
    return (
      <TabBar>
        {
          navList.map(nav => (
            <TabBar.Item key={nav.path}
                 title={nav.text}
                 icon={{uri: require(`./imgs/${nav.icon}.png`)}}
                 selectedIcon={{uri: require(`./imgs/${nav.icon}-selected.png`)}}
                 selected={nav.path===path}
                 onPress={() => this.props.history.replace(nav.path)}
                />
          ))
        }

      </TabBar>
    )
  }
}

export default withRouter(NavFooter)  // 向一般组件传递路由相关属性(history/location/match)
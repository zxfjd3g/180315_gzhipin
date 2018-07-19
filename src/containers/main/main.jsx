/*
主界面组件
 */
import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {NavBar} from 'antd-mobile'

import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
import Laoban from '../laoban/laoban'
import Dashen from '../dashen/dashen'
import Message from '../message/message'
import Personal from '../personal/personal'
import NavFooter from '../../components/nav-footer/nav-footer'

export default class Main extends Component {

  // 给组件对象添加一个属性navList: 后面访问: this.navList
  navList = [
    {
      path: '/laoban', // 路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神',
    },
    {
      path: '/dashen', // 路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板',
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息',
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
    }
  ]

  render () {

    // 得到当前路由信息对象
    // 得到当前请求的路径
    const path = this.props.location.pathname
    // 从navList中找出对应的nav    find(): 返回一个回调函数返回true的元素
    const currentNav = this.navList.find(function (nav, index) {// 回调函数
        return path===nav.path
    })



    return (
      <div>
        {currentNav ? <NavBar>{currentNav.title}</NavBar> : null}
        <Switch>
          <Route path='/laobaninfo' component={LaobanInfo}/>
          <Route path='/dasheninfo' component={DashenInfo}/>
          <Route path='/laoban' component={Laoban}/>
          <Route path='/dashen' component={Dashen}/>
          <Route path='/message' component={Message}/>
          <Route path='/personal' component={Personal}/>
        </Switch>
        {currentNav ? <NavFooter/> : null}
      </div>
    )
  }
}

/*
声明式编程: what(什么工作)  填空题
命令式编程: what(什么工作) + how(流程) 问答题
arr.reduce((preTotal, item) => preTotal + item, 0)
 */

/*
回调函数
1. 你定义的
2. 你没有调用
3. 但最终它执行了
 */
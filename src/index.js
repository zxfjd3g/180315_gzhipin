/*
入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import Login from './containers/login/login'
import Register from './containers/register/register'
import Main from './containers/main/main'
import store from './redux/store'

import './assets/css/index.less'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route component={Main}/>{/*默认路由: 只要不与上面的匹配, 就显示当前组件*/}
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'))


/*
路由分类: 前后路由, 后台路由
// 注册后台路由
router.get('/xxx', funtion (req, res) {})
router.get('/yyy', funtion (req, res) {})
// 注册前台路由
<Route path='/login' component={Login}/>
<Route path='/register' component={Register}/>

路由是什么?
  路由就是一个映射关系(key:value), key是path, value是callback或component

*/
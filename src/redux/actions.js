/*
包含n个action creator函数的模块
同步action: 对象  (与action type一一对应)
异步action: 函数
 */
import {
  reqRegister,
  reqLogin
} from '../api'

import {
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types'

// 成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 失败的同步action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})


/*
注册的异步action
1. 执行异步代码(发ajax请求)
2. 有了结果后, 根据结果不同分发不同的同步action
 */
export function register(user) {
  const {username, password, type} = user
  return dispatch => {
    // 1. 执行异步代码(发ajax请求)
    reqRegister({username, password, type}).then(response => {
      const result = response.data
      if(result.code===0) { // 成功
        // 分发成功的同步action
        dispatch(authSuccess(result.data))
      } else { // 失败
        // 分发失败的同步action
        dispatch(errorMsg(result.msg))
      }
    })
  }
}

/*
登陆的异步action
 */
export function login() {
  return dispatch => {

  }
}
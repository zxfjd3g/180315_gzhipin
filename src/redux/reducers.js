import {combineReducers} from 'redux'

import {
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types'

// 产生user状态的reducer
const initUser = {
  username: '',
  type: '',
  msg: ''  // 需要显示的错误信息
}
function user (state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      const user = action.data
      return user
    case ERROR_MSG:
      const msg = action.data
      return {...state, msg}
    default:
      return state
  }
}


// 合并多个reducer, 生成一个新的reducer
// 返回的状态, 是包含所有状态的对象: {xxx: 0, yyy: {}}
export default combineReducers({
  user
})
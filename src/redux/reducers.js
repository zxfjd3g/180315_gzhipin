import {combineReducers} from 'redux'
import {getRedirectTo} from '../utils'

import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST,
  RECEIVE_CHAT_MSG,
  RECEIVE_CHAT_MSGS
} from './action-types'

// 产生user状态的reducer
const initUser = {
  username: '',
  type: '',
  msg: '',  // 需要显示的错误信息
  redirectTo: '' // 需要自动跳转的路径
}
function user (state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      const user = action.data
      return {...user, redirectTo: getRedirectTo(user.type, user.header)}
    case ERROR_MSG:
      const msg = action.data
      return {...state, msg}
    case RECEIVE_USER:
      return action.data
    case RESET_USER:
      return {...initUser, msg: action.data}
    default:
      return state
  }
}


// 产生userList状态的reducer
const initUserList = []
function userList(state=initUserList, action) {
  switch (action.type) {
    case RECEIVE_USER_LIST:
      return action.data
    default:
      return state
  }
}


// 产生chat相关数据的reducer
const initChat = {
  users: {},
  chatMsgs: [],
  unReadCount: 0  // 总的未读数量
}
function chat(state=initChat, action) {
  switch (action.type) {
    case RECEIVE_CHAT_MSGS:
      const {users, chatMsgs} = action.data
      return {
        users,
        chatMsgs,
        unReadCount: 0
      }
    case RECEIVE_CHAT_MSG:
      const chatMsg = action.data
      return {
        users: state.users,
        chatMsgs: [...state.chatMsgs, chatMsg],
        unReadCount: 0
      }
    default:
      return state
  }
}


// 合并多个reducer, 生成一个新的reducer
// 返回的状态, 是包含所有状态的对象: {user: xxx}
export default combineReducers({
  user,
  userList,
  chat
})


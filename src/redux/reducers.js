import {combineReducers} from 'redux'
import {getRedirectTo} from '../utils'

import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST,
  RECEIVE_CHAT_MSG,
  RECEIVE_CHAT_MSGS,
  CHAT_MSG_READ
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
      var {users, chatMsgs, meId} = action.data
      return {
        users,
        chatMsgs,
        unReadCount: chatMsgs.reduce(function (preCount, msg) {
          // msg是别人发给我的未读消息
          return preCount + (!msg.read && msg.to===meId ? 1 : 0)
        }, 0)
      }
    case RECEIVE_CHAT_MSG:
      var data = action.data
      return {
        users: state.users,
        chatMsgs: [...state.chatMsgs, data.chatMsg],
        unReadCount: state.unReadCount + (!data.chatMsg.read && data.chatMsg.to===data.meId ? 1 : 0)
      }
    case CHAT_MSG_READ:
      const {from, to, count} = action.data
      return {
        users: state.users,
        chatMsgs: state.chatMsgs.map(msg => {
          if(msg.from===from && msg.to===to && !msg.read) {
            // msg.read = true
            return {...msg, read: true}
          }
          return msg
        }),
        unReadCount: state.unReadCount-count
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
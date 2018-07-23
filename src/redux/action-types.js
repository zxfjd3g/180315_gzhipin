/*
包含n个action type常量名称的模块
 */
export const AUTH_SUCCESS = 'auth_success' // 成功
export const ERROR_MSG = 'error_msg' // 失败
export const RECEIVE_USER = 'receive_user' // 接收一个新的user
export const RESET_USER = 'reset_user' // 重置用户信息
export const RECEIVE_USER_LIST = 'receive_user_list' // 接收用户列表
export const RECEIVE_CHAT_MSGS = 'receive_chat_msgs' // 接收消息列表
export const RECEIVE_CHAT_MSG = 'receive_chat_msg' // 接收一条消息
export const CHAT_MSG_READ = 'chat_msg_read' // 一个聊天的消息已读了
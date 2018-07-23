/*
消息列表的主界面路由
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {List, Badge} from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief
/*
1. 先创建一个用于保存所有lastMsg对象容器: lastMsgObjs, key是chat_id, value是msg,
2. 遍历chatMsgs, 得到msg, 判断msg是否是对应聊天的最后一个, 如果是保存到lastMsgObjs
3. 得到lastMsgObjs的value组成的数组: lastMsgs
4. 对lastMsgs按create_time进行降序
 */
class Message extends Component {

  getLastMsgs = (chatMsgs, meId) => {
    //1. 先创建一个用于保存所有lastMsg对象容器: lastMsgObjs, key是chat_id, value是msg,
    const lastMsgObjs = {}

    // 2. 遍历chatMsgs, 得到msg, 判断msg是否是对应聊天的最后一个, 如果是保存到lastMsgObjs
    chatMsgs.forEach(msg => {
      // 别人发给我的未读消息: read为false, msg.to===meId

      // 每个msg都统计一下自己
      if(!msg.read && msg.to===meId) {
        msg.unReadCount = 1
      } else {
        msg.unReadCount = 0
      }


      const chatId = msg.chat_id
      const lastMsg = lastMsgObjs[chatId]
      if(!lastMsg) { // 如果对象容器中没有, 当前msg就是lastMsg
        lastMsgObjs[chatId] = msg
      } else { // 如果有, 就需要进行比较, 如果msg最晚, 替换
        // 最终的lastMsg可能是lastMsg或者msg
        const unReadCount = lastMsg.unReadCount +msg.unReadCount // 已统计好的+当前msg的

        if(msg.create_time>lastMsg.create_time) {
          lastMsgObjs[chatId] = msg
        }
        // 将最新的unReadCount保存到最新的lastMsg上
        lastMsgObjs[chatId].unReadCount = unReadCount

      }
    })

    // 3. 得到lastMsgObjs的value组成的数组: lastMsgs
    const lastMsgs = Object.values(lastMsgObjs)

    // 4. 对lastMsgs按create_time进行降序
    lastMsgs.sort(function (m1, m2) {
      return m2.create_time-m1.create_time
    })

    return lastMsgs

  }

  render() {

    const {users, chatMsgs} = this.props.chat
    const {user} = this.props
    const meId = user._id
    // debugger
    // 得到每个聊天的lastMsg组成的数组
    const lastMsgs = this.getLastMsgs(chatMsgs, meId)

    return (
      <List style={{marginTop: 50, marginBottom: 50}}>
        {
          lastMsgs.map(msg => {
            // 计算出targetId
            let targetId
            if(msg.to===meId) {
              targetId = msg.from
            } else {
              targetId = msg.to
            }
            const targetUser = users[targetId]
            const {header, username} = targetUser
            return (
              <Item
                key={msg._id}
                extra={<Badge text={msg.unReadCount}/>}
                thumb={require(`../../assets/imgs/${header}.png`)}
                arrow='horizontal'
                onClick={() => this.props.history.push(`/chat/${targetId}`)}
              >
                {msg.content}
                <Brief>{username}</Brief>
              </Item>
            )
          })
        }
      </List>
    )
  }
}

export default connect(
  state => ({chat: state.chat, user: state.user}),
  {}
)(Message)
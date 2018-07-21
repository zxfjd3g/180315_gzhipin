import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, List, InputItem} from 'antd-mobile'

import {sendMessage} from '../../redux/actions'

const Item = List.Item

class Chat extends Component {

  state = {
    content: ''
  }

  send = () => {
    // 通过socketio向服务器发送消息
    const {content} = this.state
    const to = this.props.match.params.userid
    const from = this.props.user._id
    this.props.sendMessage({content, from, to})
  }

  render() {
    const targetId = this.props.match.params.userid
    const {users, chatMsgs} = this.props.chat
    const {user} = this.props
    const meId = user._id
    const chatId = [targetId, meId].sort().join('_') // chatId是当前聊天的标识

    // 对chatMsgs进行过滤得到我与targetId的所有chatMsg的数组
    const msgs = chatMsgs.filter(msg => msg.chat_id===chatId)
    const targetHeader = users[targetId].header
    const targetIcon = require(`../../assets/imgs/${targetHeader}.png`)
    return (
      <div id='chat-page'>
        <NavBar>{targetId}</NavBar>
        <List>
          {
            msgs.map(msg => {
              if(msg.to===meId) { // 别人发给我的
                return (
                  <Item
                    key={msg._id}
                    thumb={targetIcon}
                  >
                    {msg.content}
                  </Item>
                )
              } else { // 我发给别人的
                return (
                  <Item
                    className='chat-me'
                    extra='我'
                  >
                    {msg.content}
                  </Item>
                )
              }
            })
          }
        </List>

        <div className='am-tab-bar'>
          <InputItem
            placeholder="请输入"
            onChange={(val) => this.setState({content: val})}
            extra={
              <span onClick={this.send}>发送</span>
            }
          />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user, chat: state.chat}),
  {sendMessage}
)(Chat)
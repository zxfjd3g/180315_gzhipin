import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, List, InputItem, Icon, Grid} from 'antd-mobile'

import {sendMessage, readChatMsg} from '../../redux/actions'

const Item = List.Item

class Chat extends Component {

  state = {
    content: '',
    isShow: false, // 是否显示表情列表
  }

  send = () => {
    // 通过socketio向服务器发送消息
    const {content} = this.state
    const to = this.props.match.params.userid
    const from = this.props.user._id
    this.props.sendMessage({content, from, to})
    // 清除输入
    this.setState({content: ''})
  }

  componentWillMount () {
    // 准备表情的数组数据
    const emojisString = '☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄☺🙂🤗🙄'
    const emojis = []
    emojisString.split('').forEach(emoji => {
      emojis.push({
        text: emoji
      })
    })
    this.emojis = emojis
  }
  componentDidUpdate () {
    // 更新显示列表
    window.scrollTo(0, document.body.scrollHeight)
  }

  componentDidMount() {
    // 初始显示列表
    window.scrollTo(0, document.body.scrollHeight)


  }

  // 在退出死亡前
  componentWillUnmount (){
    // 更新为已读
    const from = this.props.match.params.userid
    const to = this.props.user._id
    this.props.readChatMsg(from, to)
  }

  toggleShow = () => {
    const isShow = !this.state.isShow

    if(isShow) {
      // 异步手动派发resize事件,解决表情列表显示的bug
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 0)
    }

    this.setState({isShow})
  }

  render() {
    const targetId = this.props.match.params.userid
    const {users, chatMsgs} = this.props.chat
    if(!users[targetId]) { // users中没有数据
      return null // 暂时不做任何显示
    }
    const {user} = this.props
    const meId = user._id
    const chatId = [targetId, meId].sort().join('_') // chatId是当前聊天的标识

    // 对chatMsgs进行过滤得到我与targetId的所有chatMsg的数组
    const msgs = chatMsgs.filter(msg => msg.chat_id===chatId)
    const targetHeader = users[targetId].header
    const targetIcon = require(`../../assets/imgs/${targetHeader}.png`)
    return (
      <div id='chat-page'>
        <NavBar
          className='fix-top'
          icon={<Icon type='left'/>}
          onLeftClick={() => this.props.history.goBack()}
        >
          {users[targetId].username}
        </NavBar>
        <List style={{marginBottom: 50, marginTop: 50}}>
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
                    key={msg._id}
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
            value={this.state.content}
            extra={
              <span>
                <span onClick={this.toggleShow}>😊</span>
                <span onClick={this.send}>发送</span>
              </span>
            }
          />
          {
            this.state.isShow ? (
              <Grid
                data={this.emojis}
                columnNum={8}
                carouselMaxRow={4}
                isCarousel={true}
                onClick={(item) => {
                  this.setState({content: this.state.content+item.text})
                }}
              />
            ) : null
          }

        </div>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user, chat: state.chat}),
  {sendMessage, readChatMsg}
)(Chat)
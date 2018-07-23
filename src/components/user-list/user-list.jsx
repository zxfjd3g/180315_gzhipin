/*
用户列表组件
 */
import React, {Component} from 'react'
import {WingBlank, WhiteSpace, Card} from 'antd-mobile'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'


class UserList extends Component {

  static propTypes = {
    userList: PropTypes.array.isRequired
  }


  render() {
    const userList = this.props.userList.filter(user => user.header)  // 只显示有头像
    return (
      <WingBlank style={{marginTop: 50, marginBottom: 50}}>
        {/*alpha left right top bottom scale scaleBig scaleX scaleY*/}
        <QueueAnim type='left'>
          {
            userList.map(user => (
              <div key={user._id}>
                <WhiteSpace/>
                <Card onClick={() => this.props.history.push(`/chat/${user._id}`)}>
                  <Card.Header
                    thumb={require(`../../assets/imgs/${user.header}.png`)}
                    extra={<span>{user.username}</span>}
                  />
                  <Card.Body>
                    <div>职位: {user.post}</div>
                    {user.company ? <div>公司: {user.company}</div> : null}
                    {user.salary ? <div>月薪: {user.salary}</div> : null}
                    <div>描述: {user.info}</div>
                  </Card.Body>
                </Card>
              </div>
            ))
          }
        </QueueAnim>

      </WingBlank>
    )
  }
}

export default withRouter(UserList)
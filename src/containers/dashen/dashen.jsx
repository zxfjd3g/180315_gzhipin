/*
大神的主界面路由
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

class Dashen extends Component {
  render() {
    return (
      <div>Dashen</div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(Dashen)
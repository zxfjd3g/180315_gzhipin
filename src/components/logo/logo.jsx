import React from 'react'
import logo from './imgs/logo.png'
import './logo.less'
/*
logo组件
 */
export default function Logo() {

  return (
    <div className='logo-container'>
      <img className='logo-img' src={logo} alt='logo'></img>
    </div>
  )
}
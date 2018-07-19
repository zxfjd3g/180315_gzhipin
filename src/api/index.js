/*
包含n个接口请求函数的模块
每个函数对应一个接口
每个函数的返回值是promise对象
 */
import ajax from './ajax'

// const BASE = 'http://localhost:4000'
const BASE = ''
// 请求注册接口
export const reqRegister = ({username, password, type}) => ajax(BASE+'/register', {username, password, type}, 'POST')

// 请求登陆接口
export const reqLogin = (username, password) => ajax(BASE+'/login', {username, password}, 'POST')

// 更新用户信息
export const reqUpdateUser = (user) => ajax(BASE+'/update', user,'POST')

// 获取当前用户
export const reqUser = () => ajax(BASE+'/user')

/*
模块1: export xxx  export yyy: 向外暴露的是 {xxx, yyy}
模块2: export default xxx: 向外暴露的是xxx

import {xxx, yyy} from '模块1'
import xxx from '模块2'  // xxx这个名称可以随便命名
 */
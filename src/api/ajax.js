import axios from 'axios'
/*
ajax请求函数模块
函数的返回值为promise对象
 */
export default function ajax(url, data={}, type='GET') {
  if(type==='GET') {// GET请求
    // 将data中所有数据作为请求参数拼到url中
    // /register?username=tom&password=123
    let queryStr = ''
    Object.keys(data).forEach(key => {  // keys()得到对象自身的所有属性名组成的数组
      const value = data[key]
      queryStr += key + '=' + value + '&'
    })
    if(queryStr) { // username=tom&password=123&-->username=tom&password=123
      // 去除最后的&
      queryStr = queryStr.substring(0,queryStr.length-1) // username=tom&password=123
      queryStr = '?' + queryStr //?username=tom&password=123
    }

    return axios.get(url + queryStr)
  } else { // POST请求
    return axios.post(url, data)
  }
}
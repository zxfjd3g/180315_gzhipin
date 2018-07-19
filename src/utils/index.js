/*
包含n个工具函数的模块
 */
/*
1. 考虑信息是否完善: head
2. 用户类型: type
/dashen
/laoban
/dasheninfo
/laobaninfo
 */
export function getRedirectTo(type, header) {
  let path = ''
  if(type==='dashen') {
    path = '/dashen'
  } else {
    path = '/laoban'
  }

  if(!header) {
    path += 'info'
  }

  return path
}
// 引入客户端io
import io from 'socket.io-client'

// 连接服务器, 得到代表连接的socket对象
const socket = io('ws://localhost:4000')  // 导致服务器端的connection监听回调调用

// 绑定'receiveMessage'的监听, 来接收服务器发送的消息
socket.on('receiveMsg', function (data) {
  console.log('浏览器端接收到消息:', data)
})

// 向服务器发送消息 -->导致服务器sendMsg的监听回调调用
socket.emit('sendMsg', {name: 'Tom', date: Date.now()})
console.log('浏览器端向服务器发送消息:', {name: 'Tom', date: Date.now()})
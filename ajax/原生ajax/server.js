//1.引入框架
const express = require('express')
//2.创建应用对象
const app = express()
//3.创建路由规则
app.get('/server',(request,response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('hello ajax')
})
app.all('/json-server',(request,response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应头，*表示所有头信息都可以接收
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {
        name: 'hahahah'
    }
    let str = JSON.stringify(data)
    response.send(str)
})
//4，监听端口启动服务
app.listen(8000,() => {
    console.log('服务启动，8000端口监听中');
})
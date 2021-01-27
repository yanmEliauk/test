const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello express')
})

app.get('/list', (req, res) => {
    res.send({
        name: '张三', age: 20
    })
})



app.listen(3000);
console.log('网站服务器启动成功');

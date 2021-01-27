const express = require('express');
const path = require('path');
const bodyPaser = require('body-parser');
const session = require('express-session');


const app = express();

require('./model/connect');
//处理post请求参数
app.use(bodyPaser.urlencoded({ extended: false }))
//配置session
app.use(session({
    secret: 'secret key',
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));


//告诉express模板所在的位置
app.set('views', path.join(__dirname, 'views'))
//告诉express模板的默认后缀是
app.set('view engine', 'art');
//当渲染后缀为art的模板时 所使用的模板引擎是什么
app.engine('art', require('express-art-template'));

app.use(express.static(path.join(__dirname, 'public')))

const home = require('./route/home');
const admin = require('./route/admin');


//拦截请求 判断用户登录状态
app.use('/admin', require('./middleware/loginGuard'))




app.listen(3000);
console.log('网站服务器启动成功，请访问localhost:3000');

var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use('/public/',express.static('./public'))


// 配置使用art-template模板引擎
// 第一个参数，表示，当渲染以.art结尾的文件的时候，使用art-template模板引擎
// express-art-template，是专门用在express中把art-template整合到express中
// 虽然外面这里不需要记载art-template但是也必须安装，原因就在于express-art-template依赖了art-template
app.engine('html',require('express-art-template'))

//express为response响应对象提供了一个方法：render
// render方法默认是不可以使用的，但是如果配置了模板引擎就可以使用了
// res.render("html模板名"，{模板数据})
// 第一个参数不能写路径名，默认会去项目中的views目录中去查找模板文件
// 也就说express有一个约定：开发人员把所有的视图文件都放在views目录中

// 如果想要修改默认的views目录，则可以，第一个参数view不要改动，第二个是你想改变的路径
// app.set('views',render函数的默认路径)



// 配置body-parser中间件（插件，专门用来解析表单post请求体）
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/',function(req,res){
    // res.send('/page')
    // 这里记住需要将html文件变为art文件
    res.render('error.html',{
        title:"模板殷勤"
        // 这里表示传过去的数据，使用双括号语法
    })
})
app.get('/post',function(req,res){
    res.send('post page')
    // 在get中获取表单的数据时，使用req.query
    // 但是在post中没有，得使用中间件
    // 使用req.body
})
app.listen(3000,function(){
    console.log("running")
})
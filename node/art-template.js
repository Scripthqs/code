const express = require('express')
const app = express()
const port = 9999

app.engine('html',require('express-art-template'))
app.set('views','./views')
app.set('view engine','html')

app.get('/', (req, res) => {
    res.render('base.html')
})

app.get('/art1',(req,res) => {
    let name = 'zhangsan'
    let age = 20
    let gender = "男"
    let arr = ['篮球','足球','台球']

    res.render('art1.html',{
        name,age,gender,arr
    })
})
app.listen(port, () => console.log(`http://127.0.0.1:${port}`))
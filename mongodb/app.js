//新建一个users表，并且只有需要一条数据

const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.post('/init', (req, res) => {
    console.log(req.body);
})
app.listen(port, () => console.log(`http://127.0.0.1:3000`))
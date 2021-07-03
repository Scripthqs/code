const express = require('express')
const app = express()
const port = 9999

app.engine('html',require('express-art-template'))
app.set('views','./views')
app.set('view engine','html')

app.get('/', (req, res) => {
    res.render('base.html')
})
app.listen(port, () => console.log(`http://127.0.0.1:${port}`))
var fs = require('fs')
fs.writeFile('test3.txt','这是writefile传入的函数',function(err){
    if(!err){
        console.log('写入成功');
    }
})
fs.writeFile('','这是writefile传入的函数',function(err){
    if(!err){
        console.log('写入成功');
    }
})
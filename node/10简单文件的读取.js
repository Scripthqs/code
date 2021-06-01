var fs = require('fs')
fs.readFile('testaaa.txt',function(err,data){
    if(!err){
        console.log(data.toString());
    }
})
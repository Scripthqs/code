const querystring = require('querystring')
const url = 'http://nodejs.cn/api/querystring.html'
console.log(querystring.parse('username=hahah&age=22&gender=m'));
console.log(querystring.decode('username=hahah&age=22&gender=m'));
console.log(querystring.stringify({username: 'hahah', age: '22', gender: 'm'}));
console.log(querystring.encode({username: 'hahah', age: '22', gender: 'm'}));
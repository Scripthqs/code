const {add,mul} = require("./js/mathModule.js")
console.log(add(1,2));
console.log(mul(2,3));
import {name,age} from "./js/info"
console.log(name);
console.log(age);

import {aaa} from "./js/aaa"
console.log(aaa);


require('./css/index.css')

require('./css/aaa.less')

document.writeln('<h2>标题</h2>')



import  Vue from 'vue'

const app = new Vue({
    el: '#app',
    data: {
        message: '你好，世界'
    }
})
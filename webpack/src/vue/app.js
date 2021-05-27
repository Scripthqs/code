export default {
    template: `
    <div>
        <h2>{{message}}</h2>
        {{name}}
    </div>
    `,
    data(){
        return{
            message: '你好，世界',
            name: 'Vue组件离开了卡萨丁放假啦十分艰苦拉萨的飞机的'
        }
    }
}
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

    <h1>app{{ counter }}</h1>
    <button @click='add'>+</button>
    <button @click='sub'>-</button>
    <button @click='addcount(5)'>+5</button>
    <button @click='addcount(10)'>+10</button>
    <button @click='addstudent'>添加学生</button>

    <h1>getter{{ $store.getters.powerCounter }}</h1>
    <h1>students{{ more20 }}</h1>
    <h1>students{{ $store.getters.more19 }}</h1>
    <h1>students{{ $store.getters.more19l }}</h1>
    <h1>students{{ $store.getters.moreAge(20) }}</h1>
    <h1>{{ $store.state.info}}</h1>
    <button @click='updateinfo'>修改信息</button>
  
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  name: 'app',
  computed: {
    counter: function(){
      return this.$store.state.counter
    },
    more20() {
      return this.$store.state.students.filter(s => s.age >=20)
    }
  },
  methods: {
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addcount(count){
      // this.$store.commit('incount',count)
      this.$store.commit({
        type:'incount',
        count
      })
    },
    addstudent(){
      const stu = {id:114,name:'he',age:23}
      this.$store.commit('addstudent',stu)
    },
    updateinfo(){
      this.$store.commit('updateinfo')
    }

  }
}
</script>
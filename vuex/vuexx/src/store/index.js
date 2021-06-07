import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110,name:'ha',age:18},
      {id: 111,name:'hb',age:19},
      {id: 112,name:'hc',age:20},
      {id: 113,name:'hd',age:21},
    ]
  },
  mutations: {
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incount(state,payload){
      // state.counter += count
      state.counter += payload.count
      console.log(payload);
    },
    addstudent(state,stu){
      state.students.push(stu)
    }
  },
  getters: {
    powerCounter(state){
       return state.counter * state.counter
    },
    more19(state){
      return state.students.filter(s => s.age >= 20)
    },
    more19l(state,getters){
      return getters.more19.length
    },
    moreAge(state){
      // return function(age){
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  actions: {

  },
  modules: {
  }
})

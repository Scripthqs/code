import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types'

Vue.use(Vuex)

const moduleA = {
  state: {
    name: '孙悟空'
  },
  mutations: {
    updatename(state,payload){
      state.name = payload
    }
  },
  getters: {
    fullname(state){
      return state.name + '111'
    },
    fullname2(state,getters){
      return getters.fullname + '2222'
    },
    fullname3(state,getters,rootState){
      return getters.fullname2 + rootState.counter
    },
  },
  actions: {
    aupdatename(context){
      console.log(context);
      setTimeout(() => {
        context.commit('updatename','沙和尚')
      }, 1000);
    }
  }
}

export default new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110,name:'ha',age:18},
      {id: 111,name:'hb',age:19},
      {id: 112,name:'hc',age:20},
      {id: 113,name:'hd',age:21},
    ],
    info: {
      name:'xyz',
      age:30,
      gender:'男'
    }
  },
  mutations: {
    [INCREMENT](state){
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
    },
    updateinfo(state){
      state.info.name = 'abc'
      // state.info['address']='china'
      // Vue.set(state.info,'address','China')
      // delete state.info.age
      // Vue.delete(state.info,'age')
      // setTimeout(() => {
      //   state.info.name = 'abc'
      // },1000)


      
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
    aupdateinfo(context,payload){
     
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('updateinfo')
          // console.log(payload);
          // payload()
          // console.log(payload.message);
          // payload.success()
      console.log(context);
          console.log(payload);
          resolve('11111')
        },1000)
      })
    }
  },
  modules: {
    a: moduleA
  }
})

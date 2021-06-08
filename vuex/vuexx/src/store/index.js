import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
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
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA
  }
})

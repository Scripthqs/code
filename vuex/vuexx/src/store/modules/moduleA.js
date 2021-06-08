export default {
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
export default {
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

  }
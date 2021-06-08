import {INCREMENT} from './mutations-types'
export default {
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
}
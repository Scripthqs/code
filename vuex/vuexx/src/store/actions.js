export default {
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
  }
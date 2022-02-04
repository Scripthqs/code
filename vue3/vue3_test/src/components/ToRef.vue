<template>
  <h1>toRef</h1>
  <h2>人的信息{{person}}</h2>
  <h2>人的name{{person.name}}</h2>
  <h2>人的age{{person.age}}</h2>
  <h2>人的salary{{person.job.j1.salary}}</h2>
  <button @click="person.age++">点击修改</button>
  <hr>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: "toRef",
  setup () {
    // 数据
    let person = reactive({
      name: '小明',
      age: 22,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // 方法

    return {
      person
    }
  }
}
</script>

<style>
</style>
<template>
  <To-ref></To-ref>
  <Hook v-if="isShow"></Hook>
  <button @click="isShow = !isShow">点击切换隐藏组件</button>
  <Life-cycle v-if="isShow"></Life-cycle>
  <Watch-effect></Watch-effect>
  <Watch></Watch>
  <Computed></Computed>
  <Proxy msg='你好' age='22'></Proxy>
  <Reactive2></Reactive2>
  <Reactive></Reactive>
  <Ref></Ref>
  <Hello-world></Hello-world>
</template>

<script>
import { ref } from 'vue'
import Ref from './components/Ref.vue'
import Reactive from './components/Reactive.vue'
import Reactive2 from './components/Reactive2.vue'
import Proxy from './components/Proxy.vue'
import Computed from './components/Computed.vue'
import Watch from './components/Watch.vue'
import WatchEffect from './components/WatchEffect.vue'
import LifeCycle from './components/LifeCycle.vue'
import HelloWorld from './components/HelloWorld.vue'
import Hook from './components/Hook.vue'
import ToRef from './components/ToRef.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
    Ref,
    Reactive,
    Reactive2,
    Proxy,
    Computed,
    Watch,
    WatchEffect,
    LifeCycle,
    Hook,
    ToRef,
  },
  setup () {
    let isShow = ref(true)
    return {
      isShow
    }
  }

}
</script>

<style>
</style>

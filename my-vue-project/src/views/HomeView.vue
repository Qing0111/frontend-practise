<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" :msg2="obj"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return{
      obj: {
        name: 'mike',
        age: 18,
      },
    }
  },
  components: {
    HelloWorld
  }
}
</script>

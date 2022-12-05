<template>
  <div>
    <label for="num1">數字一: </label>
    <input type="number" id="num1" v-model="num1" @change="first">
  </div>
  <div>
    <label for="num2">數字二: </label>
    <input type="number" id="num2" v-model="num2" @change="first">
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        num1: '',
        num2: '',
        sum: '',
      };
    },
    methods: {
      first() {
        if(this.num1 != '' && this.num2 != ''){
          this.$emit('test', {num1: this.num1, num2: this.num2});
        }
      }
    },
  }
</script>
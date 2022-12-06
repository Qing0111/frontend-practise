<template>
  <div>
    <label for="num1">數字一: </label>
    <input type="number" id="num1" v-model="num1">
  </div>
  <div>
    <label for="num2">數字二: </label>
    <input type="number" id="num2" v-model="num2">
  </div>
  <my-calc @operation="opera"></my-calc>
  <div class="ans">
    {{ ans }}
  </div>
</template>

<script>
  import MyCalc from '@/components/MyCalc.vue'
  export default{
    components: {
      MyCalc,
    },
    data() {
      return {
        num1: '',
        num2: '',
        ans: '0',
      };
    },
    methods: {
      opera(val) {
        // console.log(typeof this.num1, typeof this.num2);
        // console.log(val);
        if(val == 'AC'){
          this.ans = '0';
        }else if(this.num1 == '' && this.num2 == ''){
          return;
        }else if(val == '+'){
          this.ans = this.num1 + this.num2;
        }else if(val == '-'){
          this.ans = this.num1 - this.num2;
        }else if(val == '*'){
          this.ans = this.num1 * this.num2;
        }else{
          this.ans = this.num1 / this.num2;
        }
        
        this.num1 = '';
        this.num2 = '';
      }
    },
  }
</script>

<style>
  div input{
    border: none;
    line-height: 20px;
    margin-bottom: 5px;
  }
  .ans{
    font-weight: bold;
    font-size: 30px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
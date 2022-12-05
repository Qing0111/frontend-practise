<template>
  <div>
    <my-calc @test="myTest"></my-calc>
  </div>
  <button @click="add">相加</button>
  <div>等於: </div>
  <h1>{{ answer }}</h1>
</template>

<script>
  import MyCalc from '@/components/MyCalc.vue';

  export default {
    components: {
      MyCalc,
    },
    data() {
      return {
        answer: '',
      };
    },
    methods: {
      myTest(num) {
        this.num1 = num.num1;
        this.num2 = num.num2;
      },
      add() {
        this.answer = this.num1 + this.num2;
      }
    },
  }
</script>
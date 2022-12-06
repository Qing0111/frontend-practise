<template>
  <div>
    <template v-for="(item, index) in btn" :key="index">
      <button @click="operation(item)" :value="item">{{ item }}</button>
    </template>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        btn:['+', '-', '*', '/', 'AC'],
      };
    },
    methods: {  
      operation(item){
        this.$emit('operation', item)
      }
    },
  }
</script>

<style>
  body{
    background-color: rgb(209, 179, 143);
  }
  button{
    margin: 10px 0;
    padding: 7px 15px;
    border: 0;
    box-shadow: 2px 2px 2px rgb(161, 161, 161);
    background-color:gray ;
    transform: scale(1);
    transition: .1s;
  }
  button:hover{
    background-color: rgb(146, 145, 145);
    transform: scale(1.05);
  }
  button:active{
    box-shadow: none;
    transform: scale(1);
  }
  button + button{
    margin-left: 15px;
  }
</style>
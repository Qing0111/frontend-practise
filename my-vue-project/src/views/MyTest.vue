<template>
  <div class="test">
    this is my test
    {{ test }}
    <my-card :userName="test"></my-card>
    <my-card userName="新增">
      <template v-slot:info>info </template>
      <template #warn>warn</template>
    </my-card>
    <my-card userName="刪除"></my-card>
    <div class="card">
      我的卡片
    </div>
    <img :src="image['loge']" alt="">
  </div>
</template>

<script>
  import MyCard from '@/components/MyCard';
  import digi from '@/assets/image/digi.jpg';

  export default {
    components: {
      MyCard,
    },
    data() {
      return{
        test: '測試',
        image: {
          loge: digi,
        },
      }
    },
    methods: {

    },
    mounted() {

    },
  }
</script>

<style>
  .card{
    color: blueviolet;
  }
  .test img{
    width: 50%;
  }
</style>
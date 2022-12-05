<template>
    <!-- <div class="card">
      myCard
    </div> -->
    <div>
      <button>
        {{ userName }}
      </button>
      <div>
        <slot name="info"></slot>
        <slot name="warn"></slot>
      </div>
    </div>
</template>

<script>
  
  export default {
    props: {
      userName: {
        type: String,
        required: true,
        default: '默認值',
      },
    }
  }
</script>

<style lang="scss" scoped>
  .card{
  background-color: skyblue;
  }
</style>
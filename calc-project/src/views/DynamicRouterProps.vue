<template>
  <div>
    
  </div>
</template>


<script>
  export default{
    props: ['id'],
    created() {
      console.log(this.id);
      const seed = 'b5ddd507724dc7e2';
      fetch(`https://randomuser.me/api/?seed=${seed}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },
  }
</script>
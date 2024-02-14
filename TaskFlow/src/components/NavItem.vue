<script lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  // export default {
  //   props: {
  //     proP: [],
  //   },
  //   created() {
  //     console.log('NavItem proP:', this.proP)
  //   }
  // }
  export default {
    props: {
      propA: [],
      propB: [],
    },
    created() {
      console.log('NavItem propA:', this.propA)
      console.log('NavItem propB:', this.propB)
    }
  }

</script>

<template>
  <RouterLink :to=" probb " v-for="(probb) in propB" class="text-grey  m-2 text-lg h-full" >
    <p> {{propA}} </p>
  </RouterLink >
</template>

<style>

</style>

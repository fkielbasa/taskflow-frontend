<script lang="ts">
  export default {
    name: 'Alert',
    props: ['error'],
  }
</script>

<template>
  <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
    <span class="block sm:inline">{{ error }}</span>
  </div>
</template>

<style scoped>

</style>

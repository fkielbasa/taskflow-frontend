<script lang="ts">
export default {
  name: 'SuccessAlert',
  props: ['message'],
}
</script>

<template>
  <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-1 rounded relative" role="alert">
    <span class="block sm:inline">{{ message }}</span>
  </div>
</template>

<style scoped>

</style>

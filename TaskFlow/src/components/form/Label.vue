<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    name: String,
    content: String
  });
</script>

<template>
  <label :for="name" class="block text-sm font-medium leading-6 text-gray-900">{{content}}</label>
</template>

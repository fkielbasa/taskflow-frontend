<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    id: String,
    name: String,
    type: String,
    autocomplete: String
  });
</script>

<template>
  <div class="mt-1">
    <input :id="id" :name="name" :type="type" :autocomplete="autocomplete" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
  </div>
</template>

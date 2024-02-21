<template>
    <a 
        :href="link"
        target="_blank"
        class=" text-full_black font-semibold text-5xl py-2 px-4 hover:text-black transition-all duration-700"
    >
        {{ name }}
    </a>
</template>
<script setup lang="ts">
const props = defineProps(['name', 'link'])
</script>
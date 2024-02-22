<template>
    <a 
        :href="link"
        target="_blank"
        class=" text-full_black font-semibold text-3xl py-2 px-4 hover:text-black transition-all duration-700 min-[500px]:text-4xl sm:text-4xl md:text-4xl lg:text-5xl min-[1920px]:text-6xl"
    >
        {{ name }}
    </a>
</template>
<script setup lang="ts">
const props = defineProps(['name', 'link'])
</script>
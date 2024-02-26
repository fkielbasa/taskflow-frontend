<template>
    <a 
        :href="link"
        target="_blank"
        class=" author-name text-full_black opacity-0 font-semibold text-3xl py-2 px-4 hover:text-black transition-all duration-600 min-[500px]:text-4xl sm:text-4xl md:text-4xl lg:text-5xl"
    >
        {{ name }}
    </a>
</template>
<script setup lang="ts">
const props = defineProps(['name', 'link'])
</script>
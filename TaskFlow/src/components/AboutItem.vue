<template>
    <section>
        <img :src="image" :alt='alt'>
        <p>{{ content }}</p>
    </section>
</template>
<script setup lang="ts">
const state = defineProps(['image', 'alt', 'content', 'reverse'])

</script>
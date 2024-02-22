<template>
    <section 
      class="flex justify-around items-center gap-x-10"
      :class="{'flex-row-reverse': props.reversed}"
    >
        <img 
          :src="props.img" 
          :alt='props.alt'
        >
        <p class=" font-medium">
          {{ props.content }}
        </p>
    </section>
</template>
<script setup lang="ts">
const props = defineProps<{
    img?: string
    alt?: string
    content?: string,
    reversed?: boolean
}>()

</script>
<template>
    <section 
      class="aboutInfo flex flex-col justify-around items-center  gap-x-10 transition-all duration-500 ease-out md:flex-row"
      :class="{'flex-row-reverse md:flex-row-reverse': props.reversed, '-translate-x-[200%]': props.reversed, 'translate-x-[200%]': !props.reversed}"
    >
      <img 
        :src="props.img" 
        :alt='props.alt'
        class="size-[300px] sm:size-[400px] "
      >
      <p class="font-medium text-full_black text-justify text-xl">
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
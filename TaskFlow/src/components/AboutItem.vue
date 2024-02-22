<template>
    <section 
      class="aboutInfo flex justify-around items-center  transition-all duration-500 ease-out"
      :class="{'flex-row-reverse': props.reversed, '-translate-x-[200%]': props.reversed, 'translate-x-[200%]': !props.reversed}"
    >
        <img 
          :src="props.img" 
          :alt='props.alt'
          width="400px"
          height="400px"
        >
        <p class="font-medium">
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
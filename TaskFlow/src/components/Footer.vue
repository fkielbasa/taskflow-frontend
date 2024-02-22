<template>
    <div class="bg-full_black flex flex-col items-center justify-center relative py-4">
        <div class="flex flex-col items-center">
            <logo class="size-16 min-[1920px]:size-[80px]" />
            <p class=" text-center text-lg font-semibold text-grey xl:text-2xl min-[1920px]:text-3xl">© TaskFlow. Wszelkie prawa zastrzeżone.</p>
        </div>
        <p class="font-semibold text-grey pr-2 xl:text-xl min-[1920px]:text-2xl"><a href="https://storyset.com/web">Web illustrations by Storyset</a></p> 
    </div>
</template>
<script setup lang="ts">
import Logo from '@/components/Logo.vue';
</script>
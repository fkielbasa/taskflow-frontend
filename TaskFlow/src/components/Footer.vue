<template>
    <div class="bg-full_black flex justify-center relative py-4">
        <div class="flex flex-col items-center">
            <logo />
            <p class=" text-lg font-semibold text-grey">© TaskFlow. Wszelkie prawa zastrzeżone.</p>
        </div>
        <p class=" text-grey absolute right-0 bottom-1/3 pr-2"><a href="https://storyset.com/web">Web illustrations by Storyset</a></p> 
    </div>
</template>
<script setup lang="ts">
import Logo from '@/components/Logo.vue';
</script>
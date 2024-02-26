<template>
    <div class="bg-full_black flex flex-col items-center justify-center relative py-4">
        <div class="flex flex-col items-center">
            <logo />
            <p class=" text-center text-lg font-bold text-grey">© TaskFlow. All rights reserved.</p>
        </div>
        <p class="font-medium text-grey pr-2 text-lg hover:text-blue">
            <a href="https://storyset.com/web">Web illustrations by Storyset</a>
        </p> 
    </div>
</template>
<script setup lang="ts">
import Logo from '@/components/Logo.vue';
</script>
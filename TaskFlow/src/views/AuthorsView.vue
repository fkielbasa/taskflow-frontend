<template>
    <section 
        id="Authors" 
        class=" h-[400px] relative bg-grey flex flex-col items-center py-8"
    >
        <h3 class="font-bold text-blue text-4xl h-1/5 min-[500px]:text-5xl sm:text-5xl lg:text-6xl ">
            Authors
        </h3>
        <img 
            src="@/assets/logo/github-logo.svg" 
            alt="Logo of Github" 
            class=" h-30 absolute bottom-0 right-0 m-0 p-0 min-[500px]:h-36 sm:h-40 md:h-44 lg:h-52 xl:h-80 min-[1920px]:h-full"
        >
        <img 
            src="@/assets/logo/gh.png" 
            alt="Name of Github" 
            class="absolute left-2 top-2 w-16 sm:w-24 md:w-32 xl:w-44"
        >
        <div class="flex flex-col justify-center items-center gap-y-4 h-3/5 lg:flex-row lg:gap-x-8 2xl:gap-x-24 ">
            <author-item  
                v-for="(a, index) in _.shuffle(authors)"
                :key="index"
                :link="a.link"
                :name="a.name"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as _ from "lodash";
import AuthorItem from '@/components/AuthorItem.vue';

const authors = ref([
    {
        name: 'enqer', 
        link: 'https://github.com/enqer'
    },
    {
        name: 'fkielbasa', 
        link: 'https://github.com/fkielbasa'
    },
    {
        name: 'Narothe', 
        link: 'https://github.com/Narothe'
    }
])

</script>
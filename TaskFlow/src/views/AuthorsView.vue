<template>
    <section 
        id="Authors" 
        class=" h-[400px] relative bg-grey flex flex-col items-center py-8"
    >
        <h3 class="font-bold text-blue text-5xl h-1/5">
            Authors
        </h3>
        <img 
            src="@/assets/logo/github-logo.svg" 
            alt="Logo of Github" 
            class="h-full absolute top-0 right-0 m-0 p-0"
        >
        <img 
            src="@/assets/logo/gh.png" 
            alt="Name of Github" 
            class="absolute left-5 top-5 w-40"
        >
        <div class="flex justify-center items-center gap-20 h-3/5">
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
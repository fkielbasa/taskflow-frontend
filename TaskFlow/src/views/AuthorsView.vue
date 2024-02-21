<template>
    <section 
        id="Authors" 
        class=" h-[400px] relative bg-grey flex py-2 justify-center"
    >
        <h3 class=" h-1/5 font-bold text-full_black text-5xl absolute top-2">
            Authors
        </h3>
        <img 
            src="@/assets/logo/github-logo.svg" 
            alt="Logo platformy Github" 
            class="h-full absolute top-0 right-0 m-0 p-0"
        >
        <img 
            src="@/assets/logo/gh.png" 
            alt="Nazwe platformy Github" 
            class="absolute left-5 top-5 w-40"
        >
        <div class="flex justify-center items-center gap-20">
            <AuthorItem  
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
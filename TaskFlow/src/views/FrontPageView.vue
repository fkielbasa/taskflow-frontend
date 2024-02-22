<template>
    <navbar />
    <home-view />
    <about-view />
    <authors-view />
    <footer-view />
</template>

<script setup lang="ts">
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import AuthorsView from '@/views/AuthorsView.vue'
import Navbar from '@/components/Navbar.vue'
import FooterView from '@/components/Footer.vue'

</script>
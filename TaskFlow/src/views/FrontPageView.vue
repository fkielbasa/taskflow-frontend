<template>
    <navbar></navbar>
    <home-view></home-view>
    <about-view></about-view>
    <authors-view></authors-view>
</template>

<script lang="ts">
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import AuthorsView from '@/views/AuthorsView.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  components: { Navbar, HomeView, AboutView, AuthorsView },

  }

</script>

<style>

</style>
<template>
    <Navbar></Navbar>
    <!-- <div id="frontPage"> -->
      <HomeView></HomeView>
      <AboutView></AboutView>
      <AuthorsView></AuthorsView>
      <p class=" bg-black h-20 w-full"><a href="https://storyset.com/web">Web illustrations by Storyset</a></p> 
    <!-- </div> -->
    
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
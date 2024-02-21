<template>
    <Navbar></Navbar>
    <!-- <div id="frontPage"> -->
      <HomeView></HomeView>
      <AboutView></AboutView>
      <AuthorsView></AuthorsView>
      <Footer></Footer>
    <!-- </div> -->
    
</template>

<script lang="ts">
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import AuthorsView from '@/views/AuthorsView.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from'@/components/Footer.vue'
export default {
  components: { Navbar, HomeView, AboutView, AuthorsView, Footer },

  }

</script>

<style>

</style>
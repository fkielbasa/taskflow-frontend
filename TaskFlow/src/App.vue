<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import LoginView from "@/views/LoginView.vue";

</script>

<template>
  <header>
    <navbar></navbar>
    <div class="wrapper p-0 mt-16">

      <home-view></home-view>
      <about-view></about-view>
      <!--TODO: Don't know how to repair route to login site so I placed it here to start my work. Please fix-->
      <login-view></login-view>
    </div>
  </header>

  <!-- <RouterView /> -->
</template>
